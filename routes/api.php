<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



// Route::group(['middleware' => ['auth:api'], 'namespace'=>'Api'], function () {
//     Route::resource('roles', 'RoleController');

//     Route::get('/varify', 'UserController@verify');
// });

Route::post('login', 'Api\UserController@login')->name('login');
Route::resource('roles', 'Api\RoleController');
