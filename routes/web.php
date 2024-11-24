<?php

use App\Http\Controllers\SeasonController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('jul/{year}', function () {
    return to_route('season.show', ['season' => 'jul', 'year' => '2024']);
});

Route::get('/season/{season}/{year}', [SeasonController::class, 'show'])->name('season.show');

require __DIR__.'/auth.php';
