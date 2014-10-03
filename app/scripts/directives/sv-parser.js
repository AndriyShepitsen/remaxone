angular.module('app')
  .directive('svParser', function (homeFinder, $q, MySrv) {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/sv-parser.html',
      scope: {},

      link: function ($scope, element, attr) {

        $scope.getNumberOfHouses = function (client) {

          var df = $q.defer();
          client.url(homeFinder).getHTML('span.count:nth-child(1)', false, function (err, html) {

            html = html.trim();
            var numberOfSaleElements = parseInt(html.substr(1, html.length - 2));
            df.resolve(numberOfSaleElements);

          }).end();
          return df.promise;
        };

        var webdriverio = require('webdriverio');
        var options = {desiredCapabilities: {browserName: 'chrome'}};
        var client = webdriverio.remote(options).init();

        var res = $scope.getNumberOfHouses(client);

        res.then(function (numberOfHouses) {
          console.log(numberOfHouses);
        })
      }
    };
  })
