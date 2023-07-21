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

        $now_curriculum = -1;
        $now_chapter = -1;

        if (Enrolled::where(['student' => auth()->user()->id, 'courses' => $id])->count() > 0) {

            $curriculum = Enrolled::where(['student' => auth()->user()->id, 'courses' => $id])->first();
            $now_curriculum = $curriculum['now_curriculum'];
            $now_chapter = $curriculum['now_chapter'];
        }



        $chapters = Chapter::where(['courses' => $id])->get();

        foreach ($chapters as $chapter) {

            $chapter['curriculum'] = Curriculum::where(['chapter' => $chapter['id'], 'privacy' => 'unlock'])->get();
        }

        $status = "enrolled";

        if (Enrolled::where(['student' => auth()->user()->id])->count() == 0) {

            $status = "not_enrolled";
        }



        return view('/student/course-overview-student', ['course' => $course, 'chapters' => $chapters, 'status' => $status, 'now_curriculum' => $now_curriculum, 'now_chapter' => $now_chapter]);
    }

    function studentCourseEnroll(Request $request)
    {

        Enrolled::create([

            'courses' => $request->courses,
            'student' => auth()->user()->id,
            'point' => 0,
            'now_chapter' => 0,
            'now_curriculum' => 0
        ]);


        return back();
    }

    function getStudentCourse($course_id, $now_curriculum, $now_chapter)
    {

        $enrolled = Enrolled::where(['student' => auth()->user()->id, 'courses' => $course_id])->first();

        if ($now_chapter > $enrolled['now_chapter']) {

            Enrolled::where(['student' => auth()->user()->id, 'courses' => $course_id])->update([
                'now_chapter' => $now_chapter,
                'now_curriculum' => $now_curriculum
            ]);
        } else if ($now_chapter == $enrolled['now_chapter'] && $now_curriculum > $enrolled['now_curriculum']) {
            Enrolled::where(['student' => auth()->user()->id, 'courses' => $course_id])->update([

                'now_curriculum' => $now_curriculum
            ]);
        }

        $chapters = Chapter::where(['courses' => $course_id])->orderBy('id', 'asc')->get();

        foreach ($chapters as $chapter) {

            $chapter['curriculum'] = Curriculum::where(['chapter' => $chapter['id']])->orderBy('id', 'asc')->get();
        }


        if ($now_curriculum == 0) {

            $curriculum_category = Curriculum::orderBy('id', 'asc')->first();

            if ($curriculum_category['category'] == "lesson") {

                $lesson = Lesson::first();
                $lesson['chapter'] = $curriculum_category['chapter'];
                return view('/courses/course-detail', ['now_curriculum' => $enrolled['now_curriculum'], 'now_chapter' => $enrolled['now_chapter'], 'course_id' => $course_id, 'chapters' => $chapters, 'lesson' => $lesson]);
            } else {

                // $quiz = Quiz::first();
            }
        } else {

            $curriculum_category = Curriculum::whereId($now_curriculum)->orderBy('id', 'asc')->first();

            if ($curriculum_category['category'] == "lesson") {

                $lesson = Lesson::where(['curriculum' => $now_curriculum])->first();
                $lesson['chapter'] = $curriculum_category['chapter'];
                return view('/courses/course-detail', ['now_curriculum' => $enrolled['now_curriculum'], 'now_chapter' => $enrolled['now_chapter'], 'course_id' => $course_id, 'chapters' => $chapters, 'lesson' => $lesson]);
            } else {

                // $quiz = Quiz::where(['curriculum' => $now_curriculums])->first();
            }
        }
    }
}
