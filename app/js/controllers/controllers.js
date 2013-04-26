"use strict";

function FormController($scope) {
    $scope.form = {
       field1: 'Lorem ipsum' 
    };
    
    $scope.submit = function() {
        console.log($scope.form);
    }
};

FormController.$inject = ['$scope'];

function ResultController($scope) {
    $scope.form = {
       field1: 'Lorem ipsum' 
    };
};

FormController.$inject = ['$scope'];