//IIFE - Immediately Invoked Function Expression 
//Queremos asegurarnos que ninguna variable local se vierte sobre el scope global.
(function (){
'use strict'; //habilitamos cosas que nos protejen de cometer errores (careless mistakes)

    //definimos la app main.
    //solo un objeto se muestra sobre el scope global
    //El objeto es 'angular' y toma como paramentros el nombre de nuestra aplicacion (myFirstApp),
    //y el segundo es una lista de dependencias que el modulo o aplicacion va a necesitar.
    angular.module('myFirstApp', [])
        //tenemos que hacer el hook entre la aplicacion y el index.html
    //ese hook se logra colocando 'ng-app="myFirstApp"' dentro del tag 'html', lo mas fuera posible 
    //del index, para hacer que angular sea responsable de todo lo que pasa dentro.
    //ESE EL ES BOUND DE LA APP.JS AL HTML

    //Ahora queremos definir otro constructor de angular que controle una porcion menor de codigo
    //(por ejemplo solo un div).
    //Como la funcion 'module' retorna una instancia de module, encadenamos 'controller', para 
    //definir el ViewModel de nuestra View(index.html).
    //Toma como parametros el nombre del ViewModel o controlador (MyFirstController) y una funcion
    //que define la funcionalidad de esa funcion especifica.
    //Se ahce el boun colocando 'ng-controller="MyFirstController"' en la etiqueta de la porcion de
    //codigo del HTML que se quiere controlar.
    .controller('MyFirstController', function ($scope){
//usamos un objeto especial de angular que permite compratir data entre el ViewModel y el View ($scope)
// el signo $ significa que esta reservado para angular (variables de angular)
        $scope.name = "Manu"; 
        $scope.sayHello = function (){
            return "Hola chee";
        };
        //Decalaramos esto en el HTML como:
        //{{name}}
        //{{sayHello()}}
        //Pero tambien podemo poner una pieza de codigo en el HTML en la que usamos el atributo "ng-model="name""
        //para especificar que esa pieza sea siempre igual a algo dentro del SCOPE que se llame "name", y eso se 
        //updatea automaticamente si lo declaramos en el HTML. Binding.
    });


})();

//Mecanismo para compartir datos entre la View y la ModelView