'use strict';

var koa = require('koa');
var app = koa();

// Обмотка для управления БД.
var Mongorito = require('mongorito');
var Model = Mongorito.Model;

Mongorito.connect('mongodb://root:725262@ds027409.mongolab.com:27409/coffeeplaces');

class Place extends Model {


}

var places = yield Place.all();

app.use(function *(){
  this.body = places;
});

app.listen(3000);


