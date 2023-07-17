<?php

namespace App\Http\Controllers;


use App\Models\User;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Chapter;
use App\Models\Category;
use App\Models\Curriculum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class CourseController extends Controller
{
    public function getListCourses()
    {

        $courses = DB::table('courses')
            ->join('categories', 'courses.categories', '=', 'categories.id')
            ->join('users', 'courses.instructor', '=', 'users.id')
            ->select('categories.name as categories_name', 'users.name as instructor_name', 'courses.*')
            ->get();
        $courses = json_decode(json_encode($courses), true);
        return view('/admin/courses/admin-course-list', ['courses' => $courses]);
    }

    public function getAddCourse()
    {
        $instructors = User::where(['role' => 'teacher'])->get();
        $categories = Category::all();

        return view('/admin/courses/admin-add-course', ['instructors' =>  $instructors, 'categories' => $categories]);
    }

    public function addCourse(Request $request)
    {
        $data = $request->validate([
            'Class Code' => 'unique:courses',
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg',
        ]);

        $image_name = uniqid() . '.' . $data['image']->getClientOriginalExtension();
        $image_path = 'images/course-image/' . $image_name;
        $request->image->move(public_path('images/course-image'), $image_name);


        Course::create([
            'name' => $request->name,
            'instructor' => $request->instructor,
            'categories' => $request->categories,
            'sequence' => $request->sequence,
            'image' => $image_path,
            'class_code' => $request->class_code,
            'requirement' => $request->requirement,
            'description' => $request->description,
            'outcome' => $request->outcome,
        ]);

        return redirect('/admin/courses-list');
    }

    public function getEditCourse($id)
    {
        $chapters = Chapter::where(['courses' => $id])->get();
        $course = Course::where(['id' => $id])->first();
        return view('/admin/courses/admin-edit-course', ['chapters' => $chapters, 'course' => $course]);
    }

    public function addChapter(Request $request)
    {
        $request->validate([

            'name' => 'required',
        ]);

        Chapter::create([
            'name' => $request->name,
            'courses' => $request->courses
        ]);


        return back();
    }

    public function getAddCurriculum($course_id, $chapter_id)
    {
        $curricula = Curriculum::where(['chapter' => $chapter_id])->get();
        $chapter = Chapter::where(['courses' => $course_id])->first();
        $course = Course::whereId($course_id)->first();

        return view('/admin/courses/admin-add-curriculum', ['chapter' => $chapter, 'course' => $course, 'curricula' => $curricula]);
    }

    public function addCurriculum(Request $request)
    {
        $data = Curriculum::create([
            'name' => $request->name,
            'chapter' => $request->chapter,
            'category' => $request->category,
            'description' => $request->description,
            'privacy' => $request->privacy
        ]);

        if ($request->category == 'lesson') {

            Lesson::create([
                'curriculum' => $data['id'],
                'duration' => $request->duration,
                'source' => $request->source
            ]);
        }


        return back();
    }

    public function deleteCourse($id)
    {
        Course::whereId($id)->delete();
        return back();
    }

    public function deleteChapter($id)
    {
        Chapter::whereId($id)->delete();
        return back();
    }

    public function deleteCurriculum($id)
    {
        Curriculum::whereId($id)->delete();
        return back();
    }
}
