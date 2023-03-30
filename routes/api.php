<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpecialtiesController; // Специальности
use App\Http\Controllers\DisciplinesController; // Дисциплина
use App\Http\Controllers\ApplicantsController; // Абитуриент
use App\Http\Controllers\ResultsController; // Результаты

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

// Специальности
Route::get('/specialties', [SpecialtiesController::class, 'index'])->name('get-specialties');
Route::post('/specialties', [SpecialtiesController::class, 'store'])->name('post-specialties');
Route::get('/specialties/{id}', [SpecialtiesController::class, 'show'])->name('show-specialties');
Route::patch('/specialties/{id}', [SpecialtiesController::class, 'update'])->name('update-specialties');
Route::delete('/specialties/{id}', [SpecialtiesController::class, 'destroy'])->name('destroy-specialties');
// Специальности

// Дисциплина
Route::get('/disciplines', [DisciplinesController::class, 'index'])->name('get-disciplines');
Route::post('/disciplines', [DisciplinesController::class, 'store'])->name('post-disciplines');
Route::get('/disciplines/{id}', [DisciplinesController::class, 'show'])->name('show-disciplines');
Route::patch('/disciplines/{id}', [DisciplinesController::class, 'update'])->name('update-disciplines');
Route::delete('/disciplines/{id}', [DisciplinesController::class, 'destroy'])->name('destroy-disciplines');
// Дисциплина

// Абитуриент
Route::get('/applicants/{spec}', [ApplicantsController::class, 'index'])->name('get-applicants');
Route::post('/applicants', [ApplicantsController::class, 'store'])->name('post-applicants');
Route::get('/applicants/{id}', [ApplicantsController::class, 'show'])->name('show-applicants');
Route::patch('/applicants/{id}', [ApplicantsController::class, 'update'])->name('update-applicants');
Route::delete('/applicants/{id}', [ApplicantsController::class, 'destroy'])->name('destroy-applicants');
// Абитуриент

// Результаты
Route::get('/results', [ResultsController::class, 'index'])->name('get-results');
Route::post('/results', [ResultsController::class, 'store'])->name('post-results');
Route::get('/results/{id}', [ResultsController::class, 'show'])->name('show-results');
Route::patch('/results/{id}', [ResultsController::class, 'update'])->name('update-results');
Route::delete('/results/{id}', [ResultsController::class, 'destroy'])->name('destroy-results');
// Результаты