module.exports = function () {
  return {
    parse: function () {
      var webdriver = require('selenium-webdriver');
      var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

      driver.get('http://www.homefinder.com');
    }
  }
}
