"use strict";

var module = angular.module('Search', ['ngResource']);

module.factory('SearchService', function($resource) {
    return $resource(
        'js/mocks/search.json',
        {},
        {
            query: {
                method: 'GET',
                isArray: false
            }
        }
    );
});

module.factory('ResultService', function() {
    return {
        filter: '',
        items: []
    };
});

module.factory('FormService', function() {
    return {
        offset: 0
    };
});

module.factory('ResultElements', function() {
    var el = $('#results');
    return {
        next: el.find('.next'),
        message: el.find('.message'),
        displayNext: function(display) {
            if(display === true) {
                this.next.show();
            } else {
                this.next.hide();
            }
        },
        displayMessage: function(display) {
            if(display === true) {
                this.message.show();
            } else {
                this.message.hide();
            }
        }
    };
});

angular.module('app', ['Search']);

function FormController($scope, FormService, SearchService, ResultService, ResultElements) {
    $scope.form = FormService;
    
    $scope.submit = function() {
        FormService.offset = 0;
        SearchService.query($scope.form, function(result) {
            ResultService.items = result.items;
            ResultService.filter = result.filter;
            ResultService.message = result.message;
            
            ResultElements.displayNext(result.next);
            ResultElements.displayMessage(result.message !== '');
        });
    }
};

FormController.$inject = [
    '$scope',
    'FormService',
    'SearchService',
    'ResultService',
    'ResultElements'
];

function ResultController(
    $scope,
    FormService,
    SearchService,
    ResultService,
    ResultElements
) {
    $scope.result = ResultService;
    
    ResultElements.displayNext(false);
    ResultElements.displayMessage(false);
    
    $scope.next = function() {
        FormService.offset = ResultService.items.length;
        SearchService.query(FormService, function(result) {
            ResultService.items = ResultService.items.concat(result.items);
            ResultService.filter = result.filter;
            ResultService.message = result.message;
            
            ResultElements.displayNext(result.next);
            ResultElements.displayMessage(result.message);
        });
    };
};

ResultController.$inject = [
    '$scope',
    'FormService',
    'SearchService',
    'ResultService',
    'ResultElements'
];