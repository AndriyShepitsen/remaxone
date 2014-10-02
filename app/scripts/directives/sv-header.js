'use strict';

angular.module('app')
  .directive('svHeader', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/sv-header.html',
      scope: {},
      link: function ($scope, element, attr) {
        console.log('Me');
      }
    };
  });
