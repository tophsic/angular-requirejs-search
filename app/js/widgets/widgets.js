"use strict";

define([
    'Console',
    'jQuery',
    'Underscore',
    'Angular'
], function(Console, $, _, angular){
    Console.group("Entering Widgets module.");
    
    var registeredWidgets = {};
    Console.info("Registered widgets: ", registeredWidgets);
    
    var initialize = function () {
        _.extend(angular.widget, registeredWidgets);
        Console.debug("Custom widgets initialized.");
    };
    
    Console.groupEnd();
    
    return { 
        initialize: initialize
    };
});
