<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\User;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Chapter;
use App\Models\Enrolled;
use App\Models\Question;
use App\Models\Challenge;
use App\Models\Curriculum;
use App\Models\QuizResult;
use App\Models\Certificate;
use App\Models\QuizHelpMode;
use Illuminate\Http\Request;
use App\Models\ResultChallenge;
use App\Models\CourseCertificate;
use App\Models\CurriculumVisited;
use App\Models\QuestionChallenge;
use App\Models\CertificateSetting;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

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
            ->get();
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

        if ($enroll) {
            foreach ($enroll as $e) {
                $total_curriculum_visited = CurriculumVisited::where('enrolled', $e['id'])->count();
                if ($total_curriculum_visited < $e['lesson']) {
                    $completed_lesson = DB::table('curriculum_visiteds')
                        ->select('curriculum_visiteds.*', 'curricula.name as curriculum_name')
                        ->join('curricula', 'curricula.id', '=', 'curriculum_visiteds.curriculum')
                        ->where('enrolled', '=', $e['id'])
                        ->orderBy('id', 'desc')
                        ->first();
                    $completed_lesson = json_decode(json_encode($completed_lesson), true);
                    $e['completed_lesson'] = $total_curriculum_visited;
                    if ($completed_lesson) {
                        $e['next_task_name'] = $completed_lesson['curriculum_name'];
                        $e['next_task_id'] = $completed_lesson['curriculum'];
                    } else {
                        $curriculum = Curriculum::where(['courses' => $e['courses_id']])->orderBy('id', 'asc')->first();
                        $e['next_task_name'] = $curriculum['name'];
                        $e['next_task_id'] = $curriculum['id'];
                    }
                    array_push($enrolleds, $e);
                }
                if (count($enrolleds) == 2) {
                    break;
                }
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

        if ($enroll) {
            foreach ($enroll as $e) {
                $total_curriculum_visited = CurriculumVisited::where('enrolled', $e['id'])->count();
                $completed_lesson = DB::table('curriculum_visiteds')
                    ->select('curriculum_visiteds.*', 'curricula.name as curriculum_name')
                    ->join('curricula', 'curricula.id', '=', 'curriculum_visiteds.curriculum')
                    ->where('enrolled', '=', $e['id'])
                    ->orderBy('id', 'desc')
                    ->first();
                $completed_lesson = json_decode(json_encode($completed_lesson), true);
                $e['completed_lesson'] = $total_curriculum_visited;
                if ($completed_lesson) {
                    $e['next_task_name'] = $completed_lesson['curriculum_name'];
                    $e['next_task_id'] = $completed_lesson['curriculum']; 
                } else {
                    $curriculum = Curriculum::where(['courses' => $e['courses_id']])->orderBy('id', 'asc')->first();
                    $e['next_task_name'] = $curriculum['name'];
                    $e['next_task_id'] = $curriculum['id'];
                }
                array_push($courses_enrolleds, $e);
            }
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




        $chapters = Chapter::where(['courses' => $id])->get();
        foreach ($chapters as $chapter) {

            $chapter['curriculum'] = Curriculum::where(['chapter' => $chapter['id'], 'privacy' => 'unlock'])->get();
        }


        $enrolled = Enrolled::where(['student' => auth()->user()->id, 'courses' => $id])->first(); 
        $now_curriculum = -1;

        if (!$enrolled) {
            $status = "not_enrolled";
        } else {
            $status = "enrolled";
            $curriculum = CurriculumVisited::where(['enrolled' => $enrolled['id']])->orderBy('id', 'desc')->first();
            if ($curriculum) {
                $now_curriculum = $curriculum['curriculum'];
            } else {
                $curriculum = Curriculum::where(['courses' => $id])->orderBy('id', 'asc')->first();
                if ($curriculum) {
                    $now_curriculum = $curriculum['id'];
                }
            }
        }




        return view('/student/course-overview-student', ['course' => $course, 'chapters' => $chapters, 'status' => $status, 'now_curriculum' => $now_curriculum]);
    }

    public function studentCourseEnroll(Request $request)
    {

        $enrolledCourses = Enrolled::where(['student' => auth()->user()->id])->join('courses', 'courses.id', '=', 'enrolleds.courses')
        ->join('curricula', 'curricula.courses', '=', 'courses.id')->select('enrolleds.*', 'courses.id as courses_id', 'courses.name as courses_name', 'courses.image as courses_image',  DB::raw("count(curricula.id) as lesson"))
        ->groupBy('courses.id')
        ->orderBy('courses.id', 'desc')->get();

        //dd($enrolledCourses);

        // Hitung jumlah kursus yang telah diambil
        $numberOfCoursesEnrolled = $enrolledCourses->count();

        $maxCourse = 3;

        if ($numberOfCoursesEnrolled >= 3) {
            $kuota = 3;
            $completedCourseFound = false;

            foreach ($enrolledCourses as $enrolledCourse) {
                // Periksa apakah kursus telah diselesaikan
                $curriculumVisited = CurriculumVisited::where('enrolled', $enrolledCourse->id)->count();
                $lessonCount = $enrolledCourse->lesson;
            
                $progress = (int)(($curriculumVisited / $lessonCount) * 100);
            
                // Jika progress belum mencapai 100, kurangi kuota
                if ($progress != 100) {
                    $kuota--;
                }
            }

            //dd($kuota);

            if ($kuota <= 0) {
                return back()->with('error', 'You can only enroll in 3 courses at a time');
            }  else {
                Enrolled::create([

                    'courses' => $request->courses,
                    'student' => auth()->user()->id, 
                    // 'point' => 0,
                    // 'curriculum_visited' => Curriculum::where(['courses' => $request->courses])->orderBy('id', 'asc')->first()['id']
                ]);
            }
        } else {
            Enrolled::create([

                'courses' => $request->courses,
                'student' => auth()->user()->id, 
                // 'point' => 0,
                // 'curriculum_visited' => Curriculum::where(['courses' => $request->courses])->orderBy('id', 'asc')->first()['id']
            ]);
        }

        return back();
    }

    public function getStudentCourse($course_id, $now_curriculum)
    {

        $enrolled = Enrolled::where(['student' => auth()->user()->id, 'courses' => $course_id])->first();

        if (CurriculumVisited::where('curriculum',  $now_curriculum)->count() == 0) {

            CurriculumVisited::create([
                'curriculum' => $now_curriculum,
                'enrolled' => $enrolled['id']
            ]);
        }

        $curriculum_visited = CurriculumVisited::where('enrolled',  $enrolled['id'])->get();



        $progress = (int)((sizeof($curriculum_visited) / Curriculum::where(['courses' => $course_id])->count()) * 100);


        $isVisited = [];
        for ($i = 0; $i < sizeof($curriculum_visited); $i++) {

            $isVisited[$curriculum_visited[$i]['curriculum']] = $curriculum_visited[$i]['curriculum'];
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

    public function getCourse($student, $course_id)
    {
        try {

            $enrolled = Enrolled::where(['student' => $student, 'courses' => $course_id])->first();

            $result = Curriculum::where(['courses' => $course_id])->orderBy('id', 'asc')->get()->map(function ($item) use ($enrolled, $student) {
                $item->isVisited = CurriculumVisited::where(['enrolled' => $enrolled->id, 'curriculum' => $item->id])->count() > 0 ? true : false;
                $item->next = CurriculumVisited::where(['enrolled' => $enrolled->id, 'curriculum' => $item->id])->count() > 0 ? CurriculumVisited::where(['enrolled' => $enrolled->id, 'curriculum' => $item->id])->first()->next : false;
                $item->chapter = Chapter::whereId($item->chapter)->first();
                $item->soal = $this->getSoalByCategory($item->id_category, $item->category);
                // jika getResultByCategory return null, maka isDone = false
                $item->isDone = $this->getResultByCategory($student, $enrolled->id, $item->category, $item->id_category) ? true : false;
                // jika isDone = true, maka result = getResultByCategory
                if ($item->isDone) {
                    $item->result = $this->getResultByCategory($student, $enrolled->id, $item->category, $item->id_category);
                }
                return $item;
            });
            $progress = (int)((CurriculumVisited::where(['enrolled' => $enrolled->id])->count() / Curriculum::where(['courses' => $course_id])->count()) * 100);

            return response()->json([
                'enrolled' => $enrolled,
                // 'curriculum_visited' => $curriculum_visited,
                'progress' => $progress,
                'curriculum' => $result,
                'message' => 'Success'
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'enrolled' => [],
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function getSoalByCategory($id, $category) {
        try {
            switch ($category) {
                case 'lesson':
                    $lesson = Lesson::whereId($id)->first();
                    return $lesson;
                case 'quiz':
                    $quiz = Question::where(['quiz' => $id])->get()->map(function ($item) {
                        $item->answer = json_decode($item->answer);
                        $item->minutes = Quiz::whereId($item->quiz)->first()->duration;
                        $item->help_mode = Quiz::whereId($item->quiz)->first()->help_mode;
                        $item->percentage = Quiz::whereId($item->quiz)->first()->min_percentage;
                        return $item;
                    });
                    return $quiz;
                default:
                    return QuestionChallenge::where(['challenge_id' => $id])->get()->map(function ($item) {
                        $item->answer = json_decode($item->answer);
                        $item->challenge = Challenge::whereId($item->challenge_id)->first();
                        return $item;
                    });
            }
        } catch (\Throwable $e) {
            return response()->json([
                'enrolled' => [],
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function getResultByCategory($student, $enrolled, $category, $id_category) {
        try {
            switch ($category) {
                case 'quiz':
                    $quiz = QuizResult::where(['quiz' => $id_category])->get()->map(function ($item) {
                        $item->percentage = Quiz::whereId($item->quiz)->first()->min_percentage;
                        $item->percentageStudent = (int)($item->correct_answer / $item->total_question * 100);
                        $item->isPassed = $item->percentageStudent >= $item->percentage ? true : false;
                        // jika isPassed gagal maka update curriculum_visited next = false
                        // if (!$item->isPassed) {
                        //     CurriculumVisited::where(['enrolled' => $enrolled, 'curriculum' => $curriculum])->update([
                        //         'next' => false
                        //     ]);
                        // }
                        return $item;
                    });
                    // change to object
                    return isset($quiz[0]) ? $quiz[0] : null;
                case 'challenge':
                    $challenge = ResultChallenge::where(['user_id' => $student, 'challenge_id' => $id_category])->orderBy('id', 'desc')->get()->map(function ($item) {
                        $item->isPassed = $item->score > 0 ? true : false;
                        return $item;
                    });
                    return isset($challenge[0]) ? $challenge[0] : null;
            }
        } catch (\Throwable $e) {
            return response()->json([
                'enrolled' => [],
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function curriculumVisited(Request $request){
        try {
            $now_curriculum = $request->curriculum;
            $id_enrolled = $request->enrolled;
            $next = isset($request->next) ? $request->next : false;
            if (CurriculumVisited::where(['curriculum' => $now_curriculum, 'enrolled' => $id_enrolled])->count() == 0) {

                CurriculumVisited::create([
                    'curriculum' => $now_curriculum,
                    'enrolled' => $id_enrolled,
                    'next' => $next
                ]);
            }

            return response()->json([
                'message' => 'Success'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ], 500);
        }
    }



    public function getQuizQuestion($course_id, $now_curriculum, $quiz_id)
    {
        $enrolled = Enrolled::where(['student' => auth()->user()->id, 'courses' => $course_id])->first();

        if (CurriculumVisited::where('curriculum',  $now_curriculum)->count() == 0) {

            CurriculumVisited::create([
                'curriculum' => $now_curriculum,
                'enrolled' => $enrolled['id']
            ]);
        }

        $curriculum_visited = CurriculumVisited::where('enrolled',  $enrolled['id'])->get();

        $progress = (int)(sizeof($curriculum_visited) / Curriculum::where(['courses' => $course_id])->count() * 100);


        $isVisited = [];
        for ($i = 0; $i < sizeof($curriculum_visited); $i++) {

            $isVisited[$curriculum_visited[$i]['curriculum']] = $curriculum_visited[$i]['curriculum'];
        }

        $chapters = Chapter::where(['courses' => $course_id])->orderBy('id', 'asc')->get();

        foreach ($chapters as $chapter) {

            $chapter['curriculum'] = Curriculum::where(['chapter' => $chapter['id']])->orderBy('id', 'asc')->get();
        }

        $course_suequence = Course::whereId($course_id)->first()['sequence'];



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
        if ($quiz['help_mode'] == 'yes' && QuizHelpMode::count()) {
            $quiz_hint = QuizHelpMode::first()->max_help_mode;
        }


        $now_chapter = Curriculum::whereId($now_curriculum)->first()->chapter;
        $first_curriculum = Curriculum::where(['chapter' => $now_chapter])->orderBy('id', 'asc')->first()->id;


        return view('/courses/course-quiz-detail', ['enroll_id' => $enrolled['id'], 'isVisited' => $isVisited, 'questions' => $questions, 'questionsById' => $questionsById,  'quiz' => $quiz, 'course_id' => $course_id, 'chapters' => $chapters, 'course_suequence' => $course_suequence, 'progress' => $progress, 'quiz_hint' => $quiz_hint, 'first_curriculum' => $first_curriculum]);
    }

    public function saveQuizScore($course_id, $now_curriculum, $quiz_id, $enroll_id, $result)
    {

        $enrolled = Enrolled::where(['student' => auth()->user()->id, 'courses' => $course_id])->first();

        if (CurriculumVisited::where('curriculum',  $now_curriculum)->count() == 0) {

            CurriculumVisited::create([
                'curriculum' => $now_curriculum,
                'enrolled' => $enrolled['id']
            ]);
        }

        $curriculum_visited = CurriculumVisited::where('enrolled',  $enrolled['id'])->get();



        $progress = (int)(sizeof($curriculum_visited) / Curriculum::where(['courses' => $course_id])->count() * 100);


        $isVisited = [];
        for ($i = 0; $i < sizeof($curriculum_visited); $i++) {

            $isVisited[$curriculum_visited[$i]['curriculum']] = $curriculum_visited[$i]['curriculum'];
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
            $completed_lesson = CurriculumVisited::where('enrolled', $e['id'])->count();
            if (CourseCertificate::where('course', '=', $e['courses_id'])->count() > 0 && $completed_lesson == $e['lesson']) {
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

    public function getChallenge($student) {
        try {
            $challenge = Challenge::where('status', 2)->get();

            $studentChallenge = ResultChallenge::where('user_id', $student)->pluck('challenge_id')->toArray();

            $challenge = $challenge->map(function ($item) use ($studentChallenge) {
                if (in_array($item->id, $studentChallenge)) {
                    $item->isDone = true;
                    $item->resultChallenge = ResultChallenge::where('challenge_id', $item->id)->first();
                } else {
                    $item->isDone = false;
                }
                return $item;
            });

            if ($challenge->isEmpty()) {
                return response()->json([
                    'challenge' => [],
                    'message' => 'Challenge not found'
                ], 200);
            }

            return response()->json([
                'challenge' => $challenge,
                'message' => 'Challenge found'
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'challenge' => [],
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function postAnswerQuiz(Request $request) {
        try {
            $result = QuizResult::updateOrCreate([
                'enrolled' => $request->enrolled,
                'quiz' => $request->quiz
            ], [
                'correct_answer' => $request->correct_answer,
                'wrong_answer' => $request->wrong_answer,
                'total_question' => (int)$request->correct_answer + (int)$request->wrong_answer,
                'duration' => $request->duration
            ]);

            return response()->json([
                'result' => $result,
                'message' => 'Success',
                'success' => true
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'result' => [],
                'message' => $th->getMessage(),
                'success' => false
            ], 500);
        }
    }

    public function postAnswer(Request $request, $student) {
        try {
            $result = ResultChallenge::updateOrCreate([
                'user_id' => $student,
                'challenge_id' => $request->challenge_id
            ], [
                'score' => $request->score,
                'time' => $request->time
            ]);

            if($request->score > 0) {
                $hint = User::whereId($student)->first()->extra_hint;
                $hint += $request->score;
                User::whereId($student)->update([
                    'extra_hint' => $hint
                ]);
            }

            return response()->json([
                'result' => $result,
                'message' => 'Success'
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'result' => [],
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function usedHint($student) {
        try {
            $hint = User::whereId($student)->first()->extra_hint;
            $hint = $hint - 1;

            if ($hint < 0) {
                return response()->json([
                    'usedHint' => [],
                    'message' => 'Hint not enough'
                ], 200);
            } else {
                User::whereId($student)->update([
                    'extra_hint' => $hint
                ]);
            }

            return response()->json([
                'usedHint' => $hint,
                'message' => 'success'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'usedHint' => [],
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function deleteVisitedCourse($enrolled, $curriculum){
        try {
            $curriculum = CurriculumVisited::where(['enrolled' => $enrolled, 'curriculum' => $curriculum])->delete();

            $enrolled = Enrolled::whereId($enrolled)->first();

            $user = User::whereId($enrolled->student)->first();

            $extra_hint = $user->extra_hint;

            return response()->json([
                'test' => $curriculum,
                'extra_hint' => $extra_hint,
                'message' => 'Success'
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'test' => [],
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function getHint($id) {
        try {
            $hint = Question::find($id)->hint;

            return response()->json([
                'hint' => $hint,
                'message' => 'success'
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'hint' => [],
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
