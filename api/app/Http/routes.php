<?php

$app->get('/', function () use ($app) {
    return $app->version();
});

$app->get('contacts', 'ContactController@get');
$app->post('contacts/add', 'ContactController@post');
$app->get('contacts/show/{contactId}', 'ContactController@show');
$app->put('contacts/edit', 'ContactController@put');
$app->delete('contacts/delete', 'ContactController@delete');