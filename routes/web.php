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

