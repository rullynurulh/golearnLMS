<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Chapter;
use App\Models\Enrolled;
use App\Models\Question;
use App\Models\Curriculum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class StudentController extends Controller
{
    public function getDashboard()
    {
        $courses = DB::table('courses')
            ->join('categories', 'courses.categories', '=', 'categories.id')
            ->join('users', 'courses.instructor', '=', 'users.id')
            ->select('categories.name as categories_name', 'users.name as instructor_name', 'users.image as instructor_image', 'courses.*')
            ->get()
            ->take(4);
        $courses = json_decode(json_encode($courses), true);
        return view('/student/home-student', ['courses' => $courses]);
    }

    function getCourseOverview($id)
    {
        $course = DB::table('courses')
            ->join('categories', 'courses.categories', '=', 'categories.id')
            ->join('users', 'courses.instructor', '=', 'users.id')
            ->leftJoin('curricula', 'curricula.courses', '=', 'courses.id')
            ->where('courses.id', '=', $id)
            ->select('categories.name as categories_name', 'users.name as instructor_name', 'users.image as instructor_image', 'courses.*',  DB::raw("count(curricula.id) as lesson"))
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

        if (Enrolled::where(['student' => auth()->user()->id])->count() == 0) {

            $status = "not_enrolled";
        }



        return view('/student/course-overview-student', ['course' => $course, 'chapters' => $chapters, 'status' => $status, 'now_curriculum' => $now_curriculum]);
    }

    function studentCourseEnroll(Request $request)
    {

        Enrolled::create([

            'courses' => $request->courses,
            'student' => auth()->user()->id,
            'point' => 0,
            'curriculum_visited' => Curriculum::where(['courses' => $request->courses])->orderBy('id', 'asc')->first()['id']
        ]);


        return back();
    }

    function getStudentCourse($course_id, $now_curriculum)
    {

        $enrolled = Enrolled::where(['student' => auth()->user()->id, 'courses' => $course_id])->first()['curriculum_visited'];
        $curriculum_visited = explode("-", $enrolled);

        $enrolled .= '-' . $now_curriculum;

        if (!in_array($now_curriculum, $curriculum_visited)) {

            array_push($curriculum_visited, $now_curriculum);
            Enrolled::where(['student' => auth()->user()->id, 'courses' => $course_id])->update([

                'curriculum_visited' => $enrolled

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

        $curriculum_category = Curriculum::whereId($now_curriculum)->orderBy('id', 'asc')->first()['category'];
        $course_suequence = Course::whereId($course_id)->first()['sequence'];


        if ($curriculum_category == "lesson") {

            $lesson = Lesson::where(['curriculum' => $now_curriculum])->first();
            return view('/courses/course-detail', ['isVisited' => $isVisited, 'course_id' => $course_id, 'chapters' => $chapters, 'lesson' => $lesson, 'course_suequence' => $course_suequence]);
        } else {

            $quiz = DB::table('curricula')
                ->join('curriculum_quizzes', 'curriculum_quizzes.curriculum', '=', 'curricula.id')
                ->join('quizzes', 'quizzes.id', '=', 'curriculum_quizzes.quiz')
                ->where(['curricula.id' => $now_curriculum])
                ->select('quizzes.*', 'curriculum_quizzes.curriculum as curriculum')
                ->first();
            $quiz = json_decode(json_encode($quiz), true);


            return view('/courses/course-quiz', ['quiz' => $quiz, 'isVisited' => $isVisited, 'course_id' => $course_id, 'chapters' => $chapters, 'course_suequence' => $course_suequence]);
        }
    }

    function getQuizQuestion($quiz_id, $question_id)
    {

        if ($question_id == -1) {

            $question = Question::where(['quiz' => $quiz_id])->orderBy('id', 'asc')->first();
        } else {
            $question = Question::where(['id' => $question_id])->first();
        }
        $quiz = Quiz::whereId($quiz_id)->first();
        $question_id = Question::where(['quiz' => $quiz_id])->orderBy('id', 'asc')->get('id');

        return view('/courses/course-quiz-detail', ['question' => $question, 'question_id' => $question_id, 'quiz' => $quiz]);
    }
}
