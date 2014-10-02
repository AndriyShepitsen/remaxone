'use strict';

var app = angular.module('app', ['firebase', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap.dropdown', 'mgcrea.ngStrap.modal', 'ui.router', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.dimensions', 'mgcrea.ngStrap.popover', 'mgcrea.ngStrap.select', 'mgcrea.ngStrap.datepicker'])
  .config(function ($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.otherwise('/home');

    //$stateProvider
    //  .state('app', {
    //    abstract: true,
    //    templateUrl: '../partials/main.html'
    //  })
//#state
  });

app.value('url', 'https://remax14.firebaseio.com/');

