"use strict";

define([
    'Console',
    'angular',
], function(
    Console,
    angular
) {
    Console.group('Start module search');
    var module = angular.module('search', []);
   
    module.factory('SearchService', function() {
        var shinyNewServiceInstance;
        //factory function body that constructs shinyNewServiceInstance
        Console.info('dev');
        return shinyNewServiceInstance;
    });
    
//    Console.info(module.controller('SearchController', function($scope) {
//        $scope.value = 'test';
//    }));
    Console.info(window.SearchController);
    
    Console.groupEnd();
    return module;
});