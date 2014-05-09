"use strict";

var express = require('express');

function stripTrailingSlash(str) {
  if (str.substr(-1) === '/') {
    return str.substr(0, str.length - 1);
  }
  return str;
}

module.exports = function () {
  var app = express();

  /**
   * Redirect all documentation requests to the new documentation site.
   *
   * @see http://popit.poplus.org/docs
   */
  app.get('*', function(req, res) {
    var newUrl = 'http://popit.poplus.org/docs';
    if (req.url !== '/') {
      newUrl = newUrl + stripTrailingSlash(req.url) + '.html';
    }
    res.redirect(301, newUrl);
  });

  return app;
};
