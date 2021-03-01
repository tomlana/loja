<?php

use Illuminate\Http\Request;
use App\Http\Controllers\MarcaController;
use App\Http\Controllers\ProdutosController;
use App\Http\Controllers\CategoriasController;
use App\Http\Controllers\UsersController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::resource('marca', MarcaController::class);
Route::resource('produtos', ProdutosController::class);
Route::resource('categorias', CategoriasController::class);
Route::resource('usuario', UsersController::class);

Route::get('/login/{email}/{senha}', [UsersController::class, 'login']);
