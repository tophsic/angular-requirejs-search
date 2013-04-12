"use strict";

define([
    'Console',
    'Underscore',
], function(Console, _){
    Console.group("Entering Service module.");

    var registeredServices = {};
    Console.info("Registered services: ", registeredServices);

    var initialize = function () {
        _.extend(angular.service, registeredServices);
        Console.debug("Custom services initialized.");
    }

    Console.groupEnd();
    return { 
        initialize: initialize
    };
});
