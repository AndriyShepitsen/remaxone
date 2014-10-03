var settings = require('./settings.js');

module.exports = function () {
  return {
    parse: function () {
      var webdriver = require('selenium-webdriver');

      var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

      var webdriverio = require('webdriverio');
      var options = {
        desiredCapabilities: {
          browserName: 'chrome'
        }
      };
      webdriverio
        .remote(options)
        .url('http://www.google.com')
        .title(function(err, res) {
          console.log('Title was: ' + res.value);
        })
        .end();
    }
  }
}
