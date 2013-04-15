"use strict";

define([
    'Console',
    'jQuery',
    'Underscore',
    'Angular'
],
function (
    Console,
    $,
    _,
    angular
) {
    var initialize = function () {
        Console.group("Starting application.");
        
        Console.group("Setup Angular");
        
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