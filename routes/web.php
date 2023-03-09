<?php

use App\Http\Controllers\ApplicantsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResultsController;
use App\Http\Controllers\VacancyViewController;
use App\Http\Controllers\VacantesLoggedController;
use App\Mail\ConfirmationMailable;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::resource('/', HomeController::class)->names("home");
Route::get('/results', [ResultsController::class, "index"])->name("results_index");
Route::resource("vacancy", VacancyViewController::class)->names("vacancyview");
Route::get("vacancy", [VacancyViewController::class, "index"])->name("vacancies_index");
Route::get('confirmation', function() {
    $correo = new ConfirmationMailable;

    Mail::to('vareyos339@proexbol.com')->send($correo);

    return "Mensaje Enviado";
});
// Route::get('results/{id}/{ids}', function ($id) {
//     var_dump($id);
// });
// Route::resource('/', HomeController::class)->names("home");
// 'canLogin' => Route::has('login'),
// 'canRegister' => Route::has('register'),

// Route::get('/vacantes', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('vacantes');

Route::resource('/vacantes', VacantesLoggedController::class)->only(['index', 'edit','update', 'create', 'store', 'destroy', 'show'])->middleware(['auth', 'verified'])->names('logged');
Route::resource('candidatos', ApplicantsController::class)->middleware(['auth', 'verified'])->names('applicants');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
