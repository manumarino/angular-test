(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);


DIController.$inject = ['$scope', '$filter']; //
function DIController ($scope, $filter) {
    //en angular, casi todo lo que lleva un $ se refiere a un SERVICIO
    //el servicio 'filter' permite crear funciones filtro que permiten  formatear
    //los datos que luego se muestran al usuario

    //$injector es el servicio secreto de angular que va y parsea lo que se inyecta dentro de una funcion
    $scope.name = 'Manu';
    
    $scope.upper = function (){
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name); //actualiza el scope.name
    }


    
}

})();


//minificado:
/*!function(){"use strict";function a(b,d,c){b.name="Manu",b.upper=function(){var a=d("uppercase");b.name=a(b.name)},console.log(c.annotate(a))}angular.module("DIApp",[]).controller("DIController",["$scope","$filter",a])}()
*/