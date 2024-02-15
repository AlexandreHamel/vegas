<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\PlaceController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::apiResource("place", PlaceController::class);
// Route::apiResource("category", CategoryController::class);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::get('/currentuser', [UserController::class, 'currentUser']);
    Route::post('/logout', [AuthController::class, 'logout']); 
});

Route::controller(PlaceController::class)->group(function(){
    Route::get('place','index');
    Route::get('place/{place}', 'show');
    Route::post('place','store')->middleware('auth:api');
    Route::put('place/{place}', 'update')->middleware('auth:api');
    Route::delete('place/{place}', 'destroy')->middleware('auth:api');
});

Route::controller(CategoryController::class)->group(function(){
    Route::get('category','index');
    Route::get('category/{category}', 'show');
    Route::post('category','store')->middleware('auth:api');
    Route::put('category/{category}', 'update')->middleware('auth:api');
    Route::delete('category/{category}', 'destroy')->middleware('auth:api');
});
