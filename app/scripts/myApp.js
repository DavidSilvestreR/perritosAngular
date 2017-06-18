'use strict';
var wapp=angular.module('miPrimeraWebapp',[]);
wapp.controller('controladorBasico', ['$scope', 
	function controladorBasico ($scope) {
		var miDogs=[
		{nombre:'saul',edad:12,foto:'img1.jpg'},
		{nombre:'Memo',edad:6,foto:'img2.jpg'},
		{nombre:'Raul',edad:2,foto:'img3.jpg'}
		];
		$scope.superDogs=miDogs;	
}]);