"use strict";
'use strict';
var app = angular.module('app', ['firebase', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap.dropdown', 'mgcrea.ngStrap.modal', 'ui.router', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.dimensions', 'mgcrea.ngStrap.popover', 'mgcrea.ngStrap.select', 'mgcrea.ngStrap.datepicker']).config(function($stateProvider, $urlRouterProvider) {});
app.value('url', 'https://remax14.firebaseio.com/');
app.value('homeFinder', 'http://www.homefinder.com/broker/Re--Max-1st-Class-769028d/');
app.service("parser", require('./scripts/nw/main.js'));
