
/* Controller file */

myApp.controller("MainCtrl", function($scope) {
	$scope.understanding = "Look closely, my friend, and you will see how the scope works!";
	
	$scope.reversedMessage = function(inputValue) {
		return inputValue.split("").reverse().join("");
	}	
	
});


function SecondCtrl($scope, Data) {
	$scope.data = Data;
	

}