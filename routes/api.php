<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/login", [MainController::class, 'login']);

Route::group(['prefix' => 'challenge'], function () {
    Route::get('/{user}', [AdminController::class, 'indexChallenge']);
    Route::post('/{user}', [AdminController::class, 'createEditChallenge']);
    Route::delete('/{id}', [AdminController::class, 'deleteChallenge']);
    Route::put('/{id}/publish', [AdminController::class, 'publishChallenge']);
    Route::put('/{id}/unpublish', [AdminController::class, 'unpublishChallenge']);
    Route::get('resultChallenge/{id}', [AdminController::class, 'resultChallenge']);


    // student
    Route::get('/{id}/student', [StudentController::class, 'getChallenge']);

});

Route::group(['prefix' => 'question'], function () {
    Route::get('/{challenge}', [AdminController::class, 'indexQuestionChallenge']);
    Route::post('/{challenge}', [AdminController::class, 'createQuestion']);
    Route::delete('/{id}', [AdminController::class, 'deleteQuestion']);

    // student
    Route::post('/{id}/student', [StudentController::class, 'postAnswer']);
});

Route::get('/apiImage/{path}', [MainController::class, 'getImage']);

Route::group(['prefix' => 'quiz'], function () {
    Route::get('/{id}', [QuizController::class, 'getAddQuestion']);
    Route::post('/{id}', [QuizController::class, 'addQuestion']);
    Route::delete('/{id}', [QuizController::class, 'deleteQuestion']);

    Route::put('/{id}/changeStatus', [QuizController::class, 'updateQuizStatus']);
});

Route::group(['prefix' => 'student'], function () {
    Route::get('course/{student}/{course_id}/{now_curriculum}', [StudentController::class, 'getCourse']);
});