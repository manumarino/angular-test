(function (){
'use strict';

//creamos un modulo angular
angular.module('NameCalculator', [])

.controller('NameCalculatorController', function($scope){
    $scope.name = "";
    $scope.totalValue = 0;
//estado de la imagen
    $scope.estado = "1";

    $scope.displayNumeric = function (){
        var totalNameValue = calculateNumericForString($scope.name); //toma el valor
        $scope.totalValue = totalNameValue;
    };

    function calculateNumericForString(string) {
        var totalStringValue = 0;
        for (var i=0; i<string.length; i++) {
            totalStringValue += string.charCodeAt(i);
        }
        return totalStringValue;
    };
//funcion para cmabiar la imagen
    $scope.cambiar = function () {
        $scope.estado = "2";
    };
});



})();