<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\MainController;
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
    Route::get('/', [AdminController::class, 'indexChallenge']);
    Route::post('/', [AdminController::class, 'createEditChallenge']);
    Route::delete('/{id}', [AdminController::class, 'deleteChallenge']);
});


