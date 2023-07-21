<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Chapter;
use App\Models\Enrolled;
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
        $now_proces = Enrolled::where(['student' => auth()->user()->id, 'courses' => $id])->first()['now_proces'];



        $chapters = Chapter::where(['courses' => $id])->get();

        foreach ($chapters as $chapter) {

            $chapter['curriculum'] = Curriculum::where(['chapter' => $chapter['id'], 'privacy' => 'unlock'])->get();
        }

        $status = "enrolled";

        if (Enrolled::where(['student' => auth()->user()->id])->count() == 0) {

            $status = "not_enrolled";
        }



        return view('/student/course-overview-student', ['course' => $course, 'chapters' => $chapters, 'status' => $status, 'now_proces' => $now_proces]);
    }

    function studentCourseEnroll(Request $request)
    {

        Enrolled::create([

            'courses' => $request->courses,
            'student' => auth()->user()->id,
            'point' => 0,
            'now_proces' => 0
        ]);


        return back();
    }

    function getStudentCourse($course_id, $now_proces)
    {
        $chapters = Chapter::where(['courses' => $course_id])->orderBy('id', 'asc')->get();

        foreach ($chapters as $chapter) {

            $chapter['curriculum'] = Curriculum::where(['chapter' => $chapter['id']])->orderBy('id', 'asc')->get();
        }

        if ($now_proces == 0) {

            $curriculum_category = Curriculum::orderBy('id', 'asc')->first();

            if ($curriculum_category['category'] == "lesson") {

                $lesson = Lesson::first();
                $lesson['chapter'] = $curriculum_category['chapter'];
                return view('/courses/course-detail', ['course_id' => $course_id, 'chapters' => $chapters, 'lesson' => $lesson]);
            } else {

                // $quiz = Quiz::first();
            }
        } else {

            $curriculum_category = Curriculum::whereId($now_proces)->orderBy('id', 'asc')->first();

            if ($curriculum_category['category'] == "lesson") {

                $lesson = Lesson::where(['curriculum' => $now_proces])->first();
                $lesson['chapter'] = $curriculum_category['chapter'];
                return view('/courses/course-detail', ['course_id' => $course_id, 'chapters' => $chapters, 'lesson' => $lesson]);
            } else {

                // $quiz = Quiz::where(['curriculum' => $now_process])->first();
            }
        }
    }
}
