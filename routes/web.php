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


Route::get('/', function () {
    return view('home');
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

Route::get('/signup-role', function () {
    return view('signup-role');
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

