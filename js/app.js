
/* AngularJS Applicaiton Initiatlization... */

var myApp = angular.module('MyLearningApp', []);
 
myApp.factory('Data', function() {
	return {message: "Test Data from Service"}
})

