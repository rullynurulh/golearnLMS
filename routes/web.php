<?php

use App\Models\Category;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', [MainController::class, 'getHomaPage']);
Route::get('/courses', [MainController::class, 'getCourses']);
Route::get('/teachers', [MainController::class, 'getTeachers']);
Route::get('/about-us', [MainController::class, 'getAboutUs']);
Route::get('/contact', [MainController::class, 'getContact']);



Route::group(['middleware' => ['guest']], function () {
    // sign up role
    Route::get('/signup-role', function () {
        return view('signup-role');
    });

    //sign up
    Route::get('/signup/{role}', [MainController::class, 'signUp'])->name('signup');
    Route::post('/signup', [MainController::class, 'signUpAction'])->name('signup_action');

    // sign in
    Route::get('/signin', function () {
        return view('signin');
    })->name('signin');
    Route::post('/signin', [MainController::class, 'signInAction'])->name('sigin_action');
});

//log out
Route::get('/logout_action', [MainController::class, 'logout_action'])->name('logout_action');

//student
Route::group(['middleware' => ['auth', 'user.role:student']], function () {

    Route::get('/student', [StudentController::class, 'getDashboard']);
    Route::get('/course-overview/{id}', [StudentController::class, 'getCourseOverview'])->name('student_course_overwiew');

    Route::post('/student/course-enroll', [StudentController::class, 'studentCourseEnroll'])->name('student_course_enroll');

    //profile
    Route::get('/student/myprofile', [UserController::class, 'getProfile']);
    Route::post('/student/myprofile/save', [UserController::class, 'updateProfile'])->name('user_update_profile');
    Route::post('/student/myprofile/change-profile-picture', [UserController::class, 'changeProfilePicture'])->name('change_profile_picture');


    Route::get('/student/mycourse', [StudentController::class, 'getStudentCourses']);
    Route::get('/student/leaderboard/{course_id}', [StudentController::class, 'getCoursesLeaderboard'])->name('student_course_leaderboard');
    // Route::get('/student/leaderboard', function () {
    //     return view('/student/student-leaderboard');
    // });



    Route::get('/student/accomplishment', function () {
        return view('/student/accomplishment-student');
    });
    Route::get('/student/accomplishment-info', function () {
        return view('/student/accomplishment-info-student');
    });

    Route::get('/course/{course_id}/{now_curriculum}', [StudentController::class, 'getStudentCourse'])->name('student_course_detail');
    Route::get('/course/quiz/start/{course_id}/{now_curriculum}/{quiz_id}', [StudentController::class, 'getQuizQuestion'])->name('student_quiz_question');
    Route::get('/course/quiz/save-result/{course_id}/{now_curriculum}/{quiz_id}/{enroll_id}/{result}', [StudentController::class, 'saveQuizScore'])->name('student_quiz_save_result');

    //change password
    Route::get('/student/setting', function () {
        return view('/student/setting-student');
    });
    Route::get('/change-password', [MainController::class, 'changePassword'])->name('change_password');
});



Route::group(['middleware' => ['auth', 'user.role:teacher,admin']], function () {

    Route::get('/admin', [AdminController::class, 'getDashboard']);

    //list student
    Route::get('/admin/user-student', [UserController::class, 'getListStudents']);

    //list admin
    Route::get('/admin/user-teacher', [UserController::class, 'getListTeachers']);

    //update user data by admin
    Route::post('/admin/user/update', [UserController::class, 'updateUserDataByAdmin'])->name('admin_update_profile_user');

    //add user data by admin
    Route::post('/admin/user/add', [UserController::class, 'addUserDataByAdmin'])->name('admin_add_profile_user');


    //update user data by admin
    Route::get('/admin/user/delete/{id}', [UserController::class, 'deleteUserDataByAdmin'])->name('admin_delete_profile_user');




    //categories
    Route::get('/admin/courses-categories', [CategoryController::class, 'getListCategories']);
    //add user categories by admin
    Route::post('/admin/courses-categories/add', [CategoryController::class, 'addCategory'])->name('admin_add_category');
    Route::get('/admin/courses-categories/delete/{id}', [CategoryController::class, 'deleteCategory'])->name('admin_delete_category');


    //courses

    //list course
    Route::get('/admin/courses-list', [CourseController::class, 'getListCourses']);
    Route::get('/admin/add-course', [CourseController::class, 'getAddCourse']);
    Route::post('/admin/add-course/add', [CourseController::class, 'addCourse'])->name('admin_add_course');
    Route::get('/admin/courses-list/delete/{id}', [CourseController::class, 'deleteCourse'])->name('admin_delete_course');


    Route::get('/admin/edit-course/{id}', [CourseController::class, 'getEditCourse'])->name('admin_edit_course');
    Route::post('/admin/edit-course/add-chapter', [CourseController::class, 'addChapter'])->name('admin_add_chapter');
    Route::get('/admin/edit-course/chapter/delete/{id}', [CourseController::class, 'deleteChapter'])->name('admin_delete_chapter');



    Route::get('/admin/add-curriculum/{course_id}/{chapter_id}', [CourseController::class, 'getAddCurriculum'])->name('admin_add_curriculum');
    Route::post('/admin/add-curriculum/add', [CourseController::class, 'addCurriculum'])->name('admin_save_curriculum');
    Route::get('/admin/edit-curriculum/delete/{id}', [CourseController::class, 'deleteCurriculum'])->name('admin_delete_curriculum');


    Route::get('/admin/add-quiz', [QuizController::class, 'getAddQuiz']);
    Route::post('/admin/add-quiz/add', [QuizController::class, 'addQuiz'])->name('admin_add_quiz');
    Route::get('/admin/quiz/delete/{id}', [QuizController::class, 'deleteQuiz'])->name('admin_delete_quiz');

    Route::get('/admin/quiz/add-question/{id}', [QuizController::class, 'getAddQuestion'])->name('admin_add_question');
    Route::post('/admin/quiz/add-question/add', [QuizController::class, 'addQuestion'])->name('admin_save_question');
    Route::get('/admin/quiz/delete-question/{id}', [QuizController::class, 'deleteQuestion'])->name('admin_delete_question');

    Route::post('/admin/update-quiz-status', [QuizController::class, 'updateQuizStatus'])->name('admin_update_quiz-status');

    Route::get('/admin/quiz-setting', [QuizController::class, 'getQuizSetting']);
    Route::post('/admin/quiz-setting/save', [QuizController::class, 'saveQuizSetting'])->name('admin_save_quiz_setting');

    Route::get('/admin/result-quiz/{id}', [QuizController::class, 'getQuizResult'])->name('admin_quiz_result');




    Route::get('/admin/certificate-list', function () {
        return view('/admin/certificate/admin-certificate-list');
    });
    Route::get('/admin/certificate-add', function () {
        return view('/admin/certificate/admin-add-certificate');
    });
    Route::get('/admin/certificate-setting', function () {
        return view('/admin/certificate/admin-certificate-setting');
    });


    Route::get('/admin/frontpage-home', [AdminController::class, 'getHomeContent']);
    Route::post('/admin/frontpage-home/save', [AdminController::class, 'saveHomeContent'])->name('admin_save_home_content');

    Route::get('/admin/frontpage-social', [AdminController::class, 'getSocialContent']);
    Route::post('/admin/frontpage-social/save', [AdminController::class, 'saveSocialContent'])->name('admin_save_social_content');
    Route::get('/admin/frontpage-social/{id}', [AdminController::class, 'deleteSocialContent'])->name('admin_delete_social_content');


    Route::get('/admin/frontpage-footer', [AdminController::class, 'getFooterContent']);
    Route::post('/admin/frontpage-footer/save', [AdminController::class, 'saveFooterContent'])->name('admin_save_footer_content');

    Route::get('/admin/frontpage-about-us', [AdminController::class, 'getAboutUsContent']);
    Route::post('/admin/frontpage-about-us/save', [AdminController::class, 'saveAboutUsContent'])->name('admin_save_about_us_content');


    Route::get('/admin/frontpage-account', [AdminController::class, 'getAccountContent']);
    Route::post('/admin/frontpage-account/save', [AdminController::class, 'saveAccountContent'])->name('admin_save_account_content');
});
