<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/signin', function () {
    return view('signin');
});
Route::get('/signup', function () {
    return view('signup');
});
Route::get('/signup-role', function () {
    return view('signup-role');
});



Route::get('/', function () {
    return view('home');
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



Route::get('/student', function () {
    return view('/student/home-student');
});
Route::get('/student/mycourse', function () {
    return view('/student/mycourse-student');
});
Route::get('/student/myprofile', function () {
    return view('/student/myprofile-student');
});
Route::get('/student/accomplishment', function () {
    return view('/student/accomplishment-student');
});
Route::get('/student/accomplishment-info', function () {
    return view('/student/accomplishment-info-student');
});
Route::get('/student/setting', function () {
    return view('/student/setting-student');
});
Route::get('/student/leaderboard', function () {
    return view('/student/student-leaderboard');
});

Route::get('/course-overview', function () {
    return view('/student/course-overview-student');
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



Route::get('/admin', function () {
    return view('/admin/admin-dashboard');
});


Route::get('/admin/user-student', function () {
    return view('/admin/users/admin-student');
});
Route::get('/admin/user-teacher', function () {
    return view('/admin/users/admin-teacher');
});
Route::get('/admin/users-setting', function () {
    return view('/admin/users/admin-users-setting');
});


Route::get('/admin/courses-categories', function () {
    return view('/admin/courses/admin-categories');
});
Route::get('/admin/courses-list', function () {
    return view('/admin/courses/admin-course-list');
});
Route::get('/admin/add-course', function () {
    return view('/admin/courses/admin-add-course');
});


Route::get('/admin/add-quiz', function () {
    return view('/admin/quiz/admin-add-quiz');
});
Route::get('/admin/quiz-setting', function () {
    return view('/admin/quiz/admin-quiz-setting');
});


Route::get('/admin/certificate-list', function () {
    return view('/admin/certificate/admin-certifiace-list');
});
Route::get('/admin/certificate-add', function () {
    return view('/admin/certificate/admin-add-certificate');
});
Route::get('/admin/certificate-setting', function () {
    return view('/admin/certificate/admin-certificate-setting');
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



