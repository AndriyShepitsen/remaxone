'use strict';

angular.module('app')
  .factory('#name#Srv', function () {

    var value=1;

    return {
      get: function () {
        return value;
      }
    };
  });
