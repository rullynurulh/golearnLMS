<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\StudentController;

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


Route::get('/', function () {
    return view('home');
});

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


Route::group(['middleware' => ['auth', 'user.role:student']], function () {

    Route::get('/student', function () {
        return view('/student/home-student');
    });

    //profile
    Route::get('/student/myprofile', [StudentController::class, 'getProfile']);
    Route::post('/student/myprofile/save', [StudentController::class, 'updateProfile'])->name('update_profile');
    Route::post('/student/myprofile/change-profile-picture', [StudentController::class, 'changeProfilePicture'])->name('change_profile_picture');


    Route::get('/student/mycourse', function () {
        return view('/student/mycourse-student');
    });

    Route::get('/student/accomplishment', function () {
        return view('/student/accomplishment-student');
    });
    Route::get('/student/accomplishment-info', function () {
        return view('/student/accomplishment-info-student');
    });
    Route::get('/student/leaderboard', function () {
        return view('/student/student-leaderboard');
    });

    Route::get('/course-overview', function () {
        return view('/student/course-overview-student');
    });


    //change password
    Route::get('/student/setting', function () {
        return view('/student/setting-student');
    });
    Route::post('/change-password', [MainController::class, 'changePassword'])->name('change_password');
});

Route::get('/course', function () {
    return view('/courses/course-detail');
});
Route::get('/course/quiz', function () {
    return view('/courses/course-quiz');
});
Route::get('/course/quiz/start', function () {
    return view('/courses/course-quiz-detail');
});
Route::get('/course/quiz/result', function () {
    return view('/courses/course-quiz-result');
});









Route::get('/admin/frontpage-home', function () {
    return view('/admin/frontpage/admin-home-content');
});


Route::get('/admin/frontpage-home', function () {
    return view('/admin/frontpage/admin-home-content');
});
Route::get('/admin/frontpage-social', function () {
    return view('/admin/frontpage/admin-social-setting');
});
Route::get('/admin/frontpage-footer', function () {
    return view('/admin/frontpage/admin-footer-setting');
});
Route::get('/admin/frontpage-account', function () {
    return view('/admin/frontpage/admin-account-setting');
});
Route::get('/admin/frontpage-about-us', function () {
    return view('/admin/frontpage/admin-about-us');
});

Route::get('/about-us', function () {
    return view('about-us');
});
Route::get('/courses', function () {
    return view('courses');
});
Route::get('/teachers', function () {
    return view('teachers');
});
Route::get('/contact', function () {
    return view('contact');
});
