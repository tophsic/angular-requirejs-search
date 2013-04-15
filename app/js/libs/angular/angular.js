define(['libs/angular/angular.min'], function () {
    
    if (typeof _ != 'undefined') {
        _.noConflict() && console.debug("_.noConflict()");
    }
    
    if(typeof $ != 'undefined') {
        $.noConflict() && console.debug("$.noConflict()");
    }
    
    return angular;
});