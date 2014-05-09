"use strict";

var express = require('express');

module.exports = function () {
  var app = express();

  var customRedirect = {
    'about': '',
    'privacy': 'privacy.html',
    'data-import': 'data-freedom.html',
    'self-hosting': 'self-hosting.html'
  };

  app.get('/:page', function(req, res, next){
    var page = req.param('page');
    res.redirect(301, 'http://popit.poplus.org/about/' + customRedirect[page]);
  });

  return app;
};
