
/* AngularJS Applicaiton Initiatlization... */

var myApp = angular.module('MyLearningApp', []);
 
myApp.factory('Data', function() {
	return {message: "SOS - ABBA - SOS"}
})

myApp.filter('reverse', function() {
	return function (text) {
		return text.split("").reverse().join("");
	}
	
})