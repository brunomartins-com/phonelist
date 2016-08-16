<?php

$app->get('/', function () use ($app) {
    return $app->version();
});

$app->group(['prefix' => 'companies', 'middleware' => 'corsMiddleware', 'namespace' => 'App\Http\Controllers'], function () use ($app) {

    $app->get('/', 'CompanyController@get');

});

$app->group(['prefix' => 'contacts', 'middleware' => 'corsMiddleware', 'namespace' => 'App\Http\Controllers'], function () use ($app) {

    $app->get('/', ['uses' => 'ContactController@get']);
    $app->post('add', 'ContactController@post');
    $app->delete('delete', 'ContactController@delete');

});
