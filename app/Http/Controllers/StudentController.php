<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Chapter;
use App\Models\Enrolled;
use App\Models\Question;
use App\Models\Curriculum;
use App\Models\QuizResult;
use App\Models\Certificate;
use Illuminate\Http\Request;
use App\Models\CertificateSetting;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\CourseCertificate;
use App\Models\QuizHelpMode;

class StudentController extends Controller
{
    public function getDashboard()
    {
        $courses = DB::table('courses')
            ->join('categories', 'courses.categories', '=', 'categories.id')
            ->join('users', 'courses.instructor', '=', 'users.id')
            ->leftJoin('enrolleds', 'enrolleds.courses', '=', 'courses.id')
            ->select('categories.name as categories_name', 'users.name as instructor_name', 'users.image as instructor_image', 'courses.*',  DB::raw("count(enrolleds.id) as student_enrolled"))
            ->groupBy('courses.id')
            ->orderBy('enrolleds.id', 'desc')
            ->get()
            ->take(4);
        $courses = json_decode(json_encode($courses), true);

        $enroll =  DB::table('enrolleds')
            ->join('courses', 'courses.id', '=', 'enrolleds.courses')
            ->join('curricula', 'curricula.courses', '=', 'courses.id')
            ->where(['enrolleds.student' => auth()->user()->id])
            ->select('enrolleds.*', 'courses.id as courses_id', 'courses.name as courses_name',  'courses.image as courses_image',  DB::raw("count(curricula.id) as lesson"))
            ->groupBy('courses.id')
            ->orderBy('id', 'desc')
            ->get();
        $enroll = json_decode(json_encode($enroll), true);


        $enrolleds = [];
        foreach ($enroll as $e) {
            $completed_lesson = (explode('-', $e['curriculum_visited']));
            if (sizeof($completed_lesson) < $e['lesson']) {
                $e['completed_lesson'] = sizeof($completed_lesson);
                $next_curriculum = Curriculum::whereId($completed_lesson[sizeof($completed_lesson) - 1])->first(['name', 'id']);
                $e['next_task_name'] = $next_curriculum['name'];
                $e['next_task_id'] = $next_curriculum['id'];
                array_push($enrolleds, $e);
            }
            if (count($enrolleds) == 2) {
                break;
            }
        }


        return view('/student/home-student', ['courses' => $courses, 'enrolleds' => $enrolleds]);
    }

    public function getStudentCourses()
    {
        $enroll =  DB::table('enrolleds')
            ->join('courses', 'courses.id', '=', 'enrolleds.courses')
            ->join('curricula', 'curricula.courses', '=', 'courses.id')
            ->where(['enrolleds.student' => auth()->user()->id])
            ->select('enrolleds.*', 'courses.id as courses_id', 'courses.name as courses_name', 'courses.image as courses_image',  DB::raw("count(curricula.id) as lesson"))
            ->groupBy('courses.id')
            ->orderBy('courses.id', 'desc')
            ->get();
        $enroll = json_decode(json_encode($enroll), true);


        $courses_enrolleds = [];
        foreach ($enroll as $e) {
            $completed_lesson = (explode('-', $e['curriculum_visited']));
            $e['completed_lesson'] = sizeof($completed_lesson);
            $next_curriculum = Curriculum::whereId($completed_lesson[sizeof($completed_lesson) - 1])->first(['name', 'id']);
            $e['next_task_name'] = $next_curriculum['name'];
            $e['next_task_id'] = $next_curriculum['id'];
            array_push($courses_enrolleds, $e);
        }

        return view('/student/mycourse-student', ['courses_enrolleds' => $courses_enrolleds]);
    }

    public function getCoursesLeaderboard($course_id)
    {
        $leaderboards = DB::table('quiz_results')
            ->join('enrolleds', 'enrolleds.id', '=', 'quiz_results.enrolled')
            ->join('users', 'users.id', '=', 'enrolleds.student')
            ->where(['enrolleds.courses' => $course_id])
            ->select('users.name as student_name', DB::raw("sum(quiz_results.correct_answer * (100/quiz_results.total_question)) as student_point"))
            ->orderBy('student_point', 'desc')
            ->groupBy('users.id')
            ->get();
        $leaderboards = json_decode(json_encode($leaderboards), true);
        $student_enrolled = Enrolled::where(['courses' => $course_id])->count();

        return view('/student/student-leaderboard', ['leaderboards' => $leaderboards, 'student_enrolled' => $student_enrolled]);
    }



    public function getCourseOverview($id)
    {
        $course = DB::table('courses')
            ->join('categories', 'courses.categories', '=', 'categories.id')
            ->join('users', 'courses.instructor', '=', 'users.id')
            ->leftJoin('curricula', 'curricula.courses', '=', 'courses.id')
            ->where('courses.id', '=', $id)
            ->select('categories.name as categories_name', 'users.name as instructor_name', 'users.image as instructor_image', 'users.image as instructor_image', 'courses.*',  DB::raw("count(curricula.id) as lesson"))
            ->first();
        $course = json_decode(json_encode($course), true);
        $course['student_enrolled'] = Enrolled::where(['courses' => $id])->count();
        $course['requirement'] = explode("\n", $course['requirement']);
        $course['description'] = explode("\n", $course['description']);
        $course['outcome'] = explode("\n", $course['outcome']);


        $now_curriculum = -1;

        $curriculum = Enrolled::where(['courses' => $id, 'student' => auth()->user()->id])->first();

        if (!is_null($curriculum)) {

            $curriculum_visited = explode("-", $curriculum['curriculum_visited']);
            $now_curriculum = $curriculum_visited[sizeof($curriculum_visited) - 1];
        }

        $chapters = Chapter::where(['courses' => $id])->get();

        foreach ($chapters as $chapter) {

            $chapter['curriculum'] = Curriculum::where(['chapter' => $chapter['id'], 'privacy' => 'unlock'])->get();
        }

        $status = "enrolled";

        if (Enrolled::where(['student' => auth()->user()->id, 'courses' => $id])->count() == 0) {

            $status = "not_enrolled";
        }



        return view('/student/course-overview-student', ['course' => $course, 'chapters' => $chapters, 'status' => $status, 'now_curriculum' => $now_curriculum]);
    }

    public function studentCourseEnroll(Request $request)
    {

        Enrolled::create([

            'courses' => $request->courses,
            'student' => auth()->user()->id,
            'point' => 0,
            'curriculum_visited' => Curriculum::where(['courses' => $request->courses])->orderBy('id', 'asc')->first()['id']
        ]);


        return back();
    }

    public function getStudentCourse($course_id, $now_curriculum)
    {

        $enrolled = Enrolled::where(['student' => auth()->user()->id, 'courses' => $course_id])->first();
        $curriculum_visited = explode("-", $enrolled['curriculum_visited']);

        $enrolled['curriculum_visited'] .= '-' . $now_curriculum;

        if (!in_array($now_curriculum, $curriculum_visited)) {

            array_push($curriculum_visited, $now_curriculum);
            Enrolled::where(['student' => auth()->user()->id, 'courses' => $course_id])->update([

                'curriculum_visited' => $enrolled['curriculum_visited']

            ]);
        }

        $progress = sizeof($curriculum_visited) / Curriculum::where(['courses' => $course_id])->count() * 100;


        $isVisited = [];
        for ($i = 0; $i < sizeof($curriculum_visited); $i++) {

            $isVisited[$curriculum_visited[$i]] = $curriculum_visited[$i];
        }



        $chapters = Chapter::where(['courses' => $course_id])->orderBy('id', 'asc')->get();

        foreach ($chapters as $chapter) {

            $chapter['curriculum'] = Curriculum::where(['chapter' => $chapter['id']])->orderBy('id', 'asc')->get();
        }

        $curriculum_category = Curriculum::whereId($now_curriculum)->orderBy('id', 'asc')->first()['category'];
        $course_suequence = Course::whereId($course_id)->first()['sequence'];


        if ($curriculum_category == "lesson") {

            $lesson = Lesson::where(['curriculum' => $now_curriculum])->first();
            return view('/courses/course-detail', ['isVisited' => $isVisited, 'course_id' => $course_id, 'chapters' => $chapters, 'lesson' => $lesson, 'course_suequence' => $course_suequence, 'progress' => $progress]);
        } else {
            $quiz = DB::table('curricula')
                ->join('curriculum_quizzes', 'curriculum_quizzes.curriculum', '=', 'curricula.id')
                ->join('quizzes', 'quizzes.id', '=', 'curriculum_quizzes.quiz')
                ->where(['curricula.id' => $now_curriculum])
                ->select('quizzes.*', 'curriculum_quizzes.curriculum as curriculum')
                ->first();
            $quiz = json_decode(json_encode($quiz), true);

            if (QuizResult::where(['enrolled' => $enrolled['id'], 'quiz' => $quiz['id']])->count() > 0) {

                $quiz_result = QuizResult::where(['enrolled' => $enrolled['id'], 'quiz' => $quiz['id']])->first();
                return view('/courses/course-quiz-result', ['quiz_result' => $quiz_result, 'isVisited' => $isVisited, 'quiz' => $quiz, 'course_id' => $course_id, 'chapters' => $chapters, 'course_suequence' => $course_suequence, 'progress' => $progress]);
            }


            return view('/courses/course-quiz', ['quiz' => $quiz, 'isVisited' => $isVisited, 'course_id' => $course_id, 'chapters' => $chapters, 'course_suequence' => $course_suequence, 'progress' => $progress]);
        }
    }



    public function getQuizQuestion($course_id, $now_curriculum, $quiz_id)
    {
        $enrolled = Enrolled::where(['student' => auth()->user()->id, 'courses' => $course_id])->first();
        $curriculum_visited = explode("-", $enrolled['curriculum_visited']);

        $enrolled['curriculum_visited'] .= '-' . $now_curriculum;

        if (!in_array($now_curriculum, $curriculum_visited)) {

            array_push($curriculum_visited, $now_curriculum);
            Enrolled::where(['student' => auth()->user()->id, 'courses' => $course_id])->update([

                'curriculum_visited' => $enrolled['curriculum_visited']

            ]);
        }

        $isVisited = [];
        for ($i = 0; $i < sizeof($curriculum_visited); $i++) {

            $isVisited[$curriculum_visited[$i]] = $curriculum_visited[$i];
        }

        $chapters = Chapter::where(['courses' => $course_id])->orderBy('id', 'asc')->get();

        foreach ($chapters as $chapter) {

            $chapter['curriculum'] = Curriculum::where(['chapter' => $chapter['id']])->orderBy('id', 'asc')->get();
        }

        $course_suequence = Course::whereId($course_id)->first()['sequence'];

        $progress = sizeof($curriculum_visited) / Curriculum::where(['courses' => $course_id])->count() * 100;

        $questions = Question::where(['quiz' => $quiz_id])->orderBy('id', 'asc')->get();
        $questionsById = [];
        foreach ($questions as $q) {
            $questionsById[$q['id']] = $q;
        }

        $quiz = DB::table('curricula')
            ->join('curriculum_quizzes', 'curriculum_quizzes.curriculum', '=', 'curricula.id')
            ->join('quizzes', 'quizzes.id', '=', 'curriculum_quizzes.quiz')
            ->where(['curricula.id' => $now_curriculum])
            ->select('quizzes.*', 'curriculum_quizzes.curriculum as curriculum')
            ->first();
        $quiz = json_decode(json_encode($quiz), true);

        $quiz_hint = 0;
        if ($quiz['help_mode'] == 'yes') {
            $quiz_hint = QuizHelpMode::first()->max_help_mode;
        }


        $now_chapter = Curriculum::whereId($now_curriculum)->first()->chapter;
        $first_curriculum = Curriculum::where(['chapter' => $now_chapter])->orderBy('id', 'asc')->first()->id;


        return view('/courses/course-quiz-detail', ['enroll_id' => $enrolled['id'], 'isVisited' => $isVisited, 'questions' => $questions, 'questionsById' => $questionsById,  'quiz' => $quiz, 'course_id' => $course_id, 'chapters' => $chapters, 'course_suequence' => $course_suequence, 'progress' => $progress, 'quiz_hint' => $quiz_hint, 'first_curriculum' => $first_curriculum]);
    }

    public function saveQuizScore($course_id, $now_curriculum, $quiz_id, $enroll_id, $result)
    {

        $enrolled = Enrolled::where(['student' => auth()->user()->id, 'courses' => $course_id])->first();
        $curriculum_visited = explode("-", $enrolled['curriculum_visited']);

        $enrolled['curriculum_visited'] .= '-' . $now_curriculum;

        if (!in_array($now_curriculum, $curriculum_visited)) {

            array_push($curriculum_visited, $now_curriculum);
            Enrolled::where(['student' => auth()->user()->id, 'courses' => $course_id])->update([

                'curriculum_visited' => $enrolled['curriculum_visited']

            ]);
        }

        $progress = sizeof($curriculum_visited) / Curriculum::where(['courses' => $course_id])->count() * 100;


        $isVisited = [];
        for ($i = 0; $i < sizeof($curriculum_visited); $i++) {

            $isVisited[$curriculum_visited[$i]] = $curriculum_visited[$i];
        }

        $chapters = Chapter::where(['courses' => $course_id])->orderBy('id', 'asc')->get();

        foreach ($chapters as $chapter) {

            $chapter['curriculum'] = Curriculum::where(['chapter' => $chapter['id']])->orderBy('id', 'asc')->get();
        }

        $course_suequence = Course::whereId($course_id)->first()['sequence'];

        $quiz = DB::table('curricula')
            ->join('curriculum_quizzes', 'curriculum_quizzes.curriculum', '=', 'curricula.id')
            ->join('quizzes', 'quizzes.id', '=', 'curriculum_quizzes.quiz')
            ->where(['curricula.id' => $now_curriculum])
            ->select('quizzes.*', 'curriculum_quizzes.curriculum as curriculum')
            ->first();
        $quiz = json_decode(json_encode($quiz), true);

        $result = explode("-", $result);

        if (QuizResult::Where(['enrolled' => $enroll_id, 'quiz' => $quiz_id])->count() == 0) {

            QuizResult::create([

                'enrolled' => $enroll_id,
                'quiz' => $quiz_id,
                'correct_answer' => $result[0],
                'wrong_answer' => $result[1],
                'total_question' => $result[2],
                'duration' => $result[3],

            ]);
        } else {
            QuizResult::where(['enrolled' => $enroll_id, 'quiz' => $quiz_id])->update([
                'correct_answer' => $result[0],
                'wrong_answer' => $result[1],
                'total_question' => $result[2],
                'duration' => $result[3],

            ]);
        }
        $quiz_result = QuizResult::where(['enrolled' => $enroll_id, 'quiz' => $quiz_id])->first();


        return view('/courses/course-quiz-result', ['quiz_result' => $quiz_result,  'isVisited' => $isVisited,  'quiz' => $quiz, 'course_id' => $course_id, 'chapters' => $chapters, 'course_suequence' => $course_suequence, 'progress' => $progress]);
    }

    public function getStudentAccomplishment()
    {

        $enroll =  DB::table('enrolleds')
            ->join('courses', 'courses.id', '=', 'enrolleds.courses')
            ->join('curricula', 'curricula.courses', '=', 'courses.id')
            ->where(['enrolleds.student' => auth()->user()->id])
            ->select('enrolleds.*', 'courses.id as courses_id', 'courses.name as courses_name',  'courses.image as courses_image',  DB::raw("count(curricula.id) as lesson"))
            ->groupBy('courses.id')
            ->orderBy('id', 'desc')
            ->get();
        $enroll = json_decode(json_encode($enroll), true);


        $enrolleds = [];
        foreach ($enroll as $e) {
            $completed_lesson = (explode('-', $e['curriculum_visited']));
            if (CourseCertificate::where('course', '=', $e['courses_id'])->count() > 0 && sizeof($completed_lesson) == $e['lesson']) {
                $certif =  DB::table('certificates')
                    ->join('courses', 'courses.name', '=', 'certificates.course_name')
                    ->join('course_certificates', 'course_certificates.certificate', '=', 'certificates.id')
                    ->select('certificates.*', 'courses.name as courses_name', 'courses.image as courses_image')
                    ->first();
                $certif = json_decode(json_encode($certif), true);
                array_push($enrolleds, $certif);
            }
        }

        return view('/student/accomplishment-student', ['enrolleds' => $enrolleds]);
    }

    public function getStudentAccomplishmentInfo($id)
    {
        $certif = Certificate::whereId($id)->first();
        $certif_setting = CertificateSetting::first();
        return view('/student/accomplishment-info-student', ['certificate' => $certif, 'certificate_setting' => $certif_setting]);
    }
}
