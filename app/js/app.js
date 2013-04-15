"use strict";

define([
    'Console',
    'jquery',
    'underscore',
    'angular',
    'modules/search/search',
    'controllers/controllers'
],
function (
    Console,
    $,
    _,
    angular,
    search,
    controllers
) {
    var initialize = function () {
        Console.group("Starting application.");
        
        Console.group("Setup Angular");
        Console.info(controllers);
        
        for(var controller in controllers) {
            window[controller] = controllers[controller];
        }
        
        angular.element(document).ready(function() {
            angular.bootstrap(document);
        });
        
        Console.info("Angular compiled and executed.");
        
        Console.groupEnd();
        Console.groupEnd();
    };
    
    return { 
        initialize: initialize
    };
});