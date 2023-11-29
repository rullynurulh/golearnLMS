<?php

namespace App\Http\Controllers;


use App\Models\Quiz;
use App\Models\User;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Chapter;
use App\Models\Category;
use App\Models\Enrolled;
use App\Models\Curriculum;
use Illuminate\Http\Request;
use App\Models\CurriculumQuiz;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Certificate;
use App\Models\Challenge;
use App\Models\CourseCertificate;
use App\Models\CurriculumChallenges;

class CourseController extends Controller
{
    public function getListCourses()
    {
        if (auth()->user()->role == 'admin') {

            $courses = DB::table('courses')
                ->join('categories', 'courses.categories', '=', 'categories.id')
                ->join('users', 'courses.instructor', '=', 'users.id')
                ->leftJoin('curricula', 'curricula.courses', '=', 'courses.id')
                ->select('categories.name as categories_name', 'users.name as instructor_name', 'courses.*', DB::raw("count(curricula.id) as lesson"))
                ->groupBy('courses.id')
                ->get();
        } else {

            $courses = DB::table('courses')
                ->join('categories', 'courses.categories', '=', 'categories.id')
                ->join('users', 'courses.instructor', '=', 'users.id')
                ->leftJoin('curricula', 'curricula.courses', '=', 'courses.id')
                ->select('categories.name as categories_name', 'users.name as instructor_name', 'courses.*', DB::raw("count(curricula.id) as lesson"))
                ->where(['courses.instructor' => auth()->user()->id])
                ->groupBy('courses.id')
                ->get();
        }

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

        $categories_status = Category::whereId($request->categories)->first()['status'];

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
            'status' => $categories_status
        ]);

        return redirect('/admin/courses-list');
    }

    public function addCourseCertificate(Request $request)
    {

        if (CourseCertificate::where(['course' => $request->course])->count() == 0) {
            CourseCertificate::create([
                'course' => $request->course,
                'certificate' => $request->certificate
            ]);
        } else {
            CourseCertificate::where(['course' => $request->course])->update([
                'certificate' => $request->certificate
            ]);
        }

        return back();
    }

    public function getEditCourse($id)
    {
        $enrolleds = DB::table('enrolleds')
            ->join('users', 'users.id', '=', 'enrolleds.student')
            ->leftJoin('quiz_results', 'quiz_results.enrolled', '=', 'enrolleds.id')
            ->where(['enrolleds.courses' => $id])
            ->select('users.name as student_name', DB::raw("sum(quiz_results.correct_answer * (100/quiz_results.total_question)) as student_point"))
            ->orderBy('student_point', 'desc')
            ->groupBy('users.id')
            ->get();
        $enrolleds = json_decode(json_encode($enrolleds), true);
        $student_enrolled = Enrolled::where(['courses' => $id])->count();
        $certificate = Certificate::all();
        $course_certificate = CourseCertificate::where(['course' => $id])->first();

        $chapters = Chapter::where(['courses' => $id])->orderBy('id', 'asc')->get();

        $chaptersById = [];
        foreach ($chapters as $t) {
            $chaptersById[$t['id']] = $t;
        }

        $course = Course::where(['id' => $id])->first();
        return view('/admin/courses/admin-edit-course', ['chapters' => $chapters, 'course' => $course, 'enrolleds' => $enrolleds, 'student_enrolled' => $student_enrolled, 'certificate' => $certificate, 'course_certificate' => $course_certificate, 'chaptersById' => $chaptersById]);
    }

    public function addChapter(Request $request)
    {

        $request->validate([
            'name' => 'required',
        ]);

        if ($request->has('chapter_id')) {

            Chapter::whereId($request->chapter_id)->update([
                'name' => $request->name,
            ]);
        } else {

            Chapter::create([
                'name' => $request->name,
                'courses' => $request->courses
            ]);
        }



        return back();
    }

    public function getAddCurriculum($course_id, $chapter_id)
    {
        $enrolleds = DB::table('enrolleds')
            ->join('users', 'users.id', '=', 'enrolleds.student')
            ->leftJoin('quiz_results', 'quiz_results.enrolled', '=', 'enrolleds.id')
            ->where(['enrolleds.courses' => $course_id])
            ->select('users.name as student_name', DB::raw("sum(quiz_results.correct_answer * (100/quiz_results.total_question)) as student_point"))
            ->orderBy('student_point', 'desc')
            ->groupBy('users.id')
            ->get();
        $enrolleds = json_decode(json_encode($enrolleds), true);
        $student_enrolled = Enrolled::where(['courses' => $course_id])->count();
        $certificate = Certificate::all();
        $course_certificate = CourseCertificate::where(['course' => $course_id])->first();
        $curricula = Curriculum::where(['chapter' => $chapter_id])->get();
        $quizzes = Quiz::where('status', '=', 'save')->get();
        $challenge = Challenge::where('status', '=', 2)->get();
        $chapter = Chapter::whereId($chapter_id)->first();
        $course = Course::whereId($course_id)->first();

        $curricula_id = [];
        foreach ($curricula as $t) {
            array_push($curricula_id, $t['id']);
        }

        $curriculaById = [];
        foreach ($curricula as $t) {
            $curriculaById[$t['id']] = $t;
        }

        $lesson = Lesson::whereIn('curriculum', $curricula_id)->get();
        $lessonsById = [];
        foreach ($lesson as $t) {
            $lessonsById[$t['curriculum']] = $t;
        }

        $curriculum_quiz = CurriculumQuiz::whereIn('curriculum', $curricula_id)->get();
        $quizById = [];
        foreach ($curriculum_quiz as $t) {
            $quizById[$t['curriculum']] = $t;
        }

        $curriculum_challenge = CurriculumChallenges::whereIn('curriculum', $curricula_id)->get();
        $challengeById = [];
        foreach ($curriculum_challenge as $t) {
            $challengeById[$t['curriculum']] = $t;
        }

        return view('/admin/courses/admin-add-curriculum', ['chapter' => $chapter, 'course' => $course, 'curricula' => $curricula, 'quizzes' => $quizzes, 'enrolleds' => $enrolleds, 'student_enrolled' => $student_enrolled, 'certificate' => $certificate, 'course_certificate' => $course_certificate, 'lessonsById' => $lessonsById, 'quizById' => $quizById, 'curriculaById' => $curriculaById, 'challenge' => $challenge, 'challengeById' => $challengeById]);
    }

    public function addCurriculum(Request $request)
    {
        if ($request->category == 'lesson') {

            if ($request->has('id')) {

                $lesson = Lesson::where(['curriculum' => $request->id])->first();
            } else {

                $lesson = new Lesson();
            }

            if ($request->hasFile('file')) {

                $data_file = $request->validate([
                    'file' => 'mimes:pdf'
                ]);

                $file_name = uniqid() . '.' . $data_file['file']->getClientOriginalExtension();
                $file_path = 'lesson-file/' . $file_name;
                $request->file->move(public_path('lesson-file'), $file_name);
                $lesson->file = $file_path;
            }

            if ($request->has('source')) {
                $lesson->source = $request->source;
            }

            if ($request->has('id')) {

                $data = Curriculum::whereId($request->id)->update([
                    'name' => $request->name,
                    'chapter' => $request->chapter,
                    'courses' => $request->courses,
                    'category' => $request->category,
                    'description' => $request->description,
                    'privacy' => $request->privacy

                ]);
            } else {

                $data = Curriculum::create([
                    'name' => $request->name,
                    'chapter' => $request->chapter,
                    'courses' => $request->courses,
                    'id_category' => $lesson->id,
                    'category' => $request->category,
                    'description' => $request->description,
                    'privacy' => $request->privacy

                ]);
            }

            $lesson->duration = $request->duration;
            $lesson->source = $request->source;
            $lesson->update();
            if ($request->has('id')) {
            } else {
                $lesson->curriculum = $data['id'];
                $lesson->save();

                Curriculum::whereId($data['id'])->update([
                    'id_category' => $lesson->id
                ]);
            }
        } else if($request->category == 'challenge'){
            if ($request->has('id')) {

                $data = Curriculum::whereId($request->id)->update([
                    'name' => Challenge::whereId($request->challenge)->first()['nama'],
                    'chapter' => $request->chapter,
                    'courses' => $request->courses,
                    'id_category' => $request->challenge,
                    'category' => $request->category,
                    'description' => $request->description,
                    'privacy' => $request->privacy

                ]);

                CurriculumChallenges::where(['curriculum' => $request->id])->update([
                    'challenge' => $request->challenge
                ]);
            } else {

                $data = Curriculum::create([
                    'name' => Challenge::whereId($request->challenge)->first()['nama'],
                    'chapter' => $request->chapter,
                    'courses' => $request->courses,
                    'id_category' => $request->challenge,
                    'category' => $request->category,
                    'description' => $request->description,
                    'privacy' => $request->privacy

                ]);
                CurriculumChallenges::create([
                    'curriculum' => $data['id'],
                    'challenge' => $request->challenge
                ]);
            }
        } else {

            if ($request->has('id')) {

                $data = Curriculum::whereId($request->id)->update([
                    'name' => Quiz::whereId($request->quiz)->first()['title'],
                    'chapter' => $request->chapter,
                    'courses' => $request->courses,
                    'id_category' => $request->quiz,
                    'category' => $request->category,
                    'description' => $request->description,
                    'privacy' => $request->privacy
                ]);

                CurriculumQuiz::where(['curriculum' => $request->id])->update([
                    'quiz' => $request->quiz
                ]);
            } else {

                $data = Curriculum::create([
                    'name' => Quiz::whereId($request->quiz)->first()['title'],
                    'chapter' => $request->chapter,
                    'courses' => $request->courses,
                    'id_category' => $request->quiz,
                    'category' => $request->category,
                    'description' => $request->description,
                    'privacy' => $request->privacy
                ]);

                CurriculumQuiz::create([
                    'curriculum' => $data['id'],
                    'quiz' => $request->quiz
                ]);
            }
        }

        return back();
    }

    public function deleteCourse($id)
    {
        unlink(Course::whereId($id)->first()->image);
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
