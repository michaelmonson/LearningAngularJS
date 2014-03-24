
/* Controller file */

myApp.controller("MainCtrl", function($scope) {
	$scope.understanding = "Look closely, my friend, and you will see how the scope works!";
	$scope.understanding2 = "(this text was inserted with $scope!)";
	
	$scope.reversedMessage = function(inputValue) {
		return inputValue.split("").reverse().join("");
	};	
	
});


function SecondCtrl($scope, Data) {
	$scope.data = Data;
	
}


function ContactCtrl($scope) {
	
	$scope.name = "Lewis Carroll";
	$scope.contacts = [
	       {type:'phone', value:'435-245-3598'},
	       {type:'email', value: 'michaelmonson@gmail.com'}	       
       ];
	
	$scope.greet = function() {
		alert(this.name);
	};
	
	$scope.addContact = function() {
		this.contacts.push({type:'email', value:'person@example.edu'});
	};
	
	$scope.removeContact = function(contactToRemove) {
		var index = this.contacts.indexOf(contactToRemove);
		this.contacts.splice(index,1);
	};
	
	$scope.clearContact = function(contact) {
		contact.type = 'phone';
		contact.value = '';
	};
	
}