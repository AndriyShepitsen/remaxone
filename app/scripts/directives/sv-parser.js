'use strict';

angular.module('app')
  .directive('svParser', function (parser) {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/sv-parser.html',
      scope: {

      },
      link: function ($scope, element, attr) {
        $scope.startParsing = function () {
          parser.parse();
        };
      }
    };
  });
