"use strict";

define([
    'Console',
    'Underscore'
], function (Console, _){
    Console.group("Entering controllers module.");
    
    var registeredControllers = {};
    Console.info("Registered Controllers: ", registeredControllers);
    
    Console.groupEnd();
    return registeredControllers;
});