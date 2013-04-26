'use strict';
define([
    'require',
    'angular'
], function(require, angular) {
  return require(['domReady!'], function(document) {
    return angular.bootstrap(document, ['search']);
  });
});