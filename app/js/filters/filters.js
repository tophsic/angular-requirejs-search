"use strict";

define([
    'Console',
    'jQuery',
    'Underscore',
    'Angular'
], function (Console, $, _, angular){
    Console.group("Entering Filters module.");

    var registeredFilters = {};
    Console.info("Registered filters: ", registeredFilters);

    var initialize = function () {
        _.extend(angular.widget, registeredFilters);
        Console.debug("Custom filters initialized.");
    }

    Console.groupEnd();
    return { 
        initialize: initialize
    };
});
