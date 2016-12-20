var app = angular.module('monApp', []);

app.controller('monController', function($scope){
	$scope.users=[];		//Notre liste de users
	$scope.newUser = {"nom":'', "prenom":'', "text":''};	//notre variable pour ajouter un user
	
	$scope.post = function(){								//Notre fonction d'ajout de user
		$scope.newUser.prenom = $scope.prenom;				//On récupère le prénom saisi depuis le modèle
		$scope.newUser.nom = $scope.nom;
		$scope.newUser.text = $scope.text;
		
		$scope.users.push($scope.newUser);					// On joute notre user dans la liste
		$scope.newUser = {"nom":'', "prenom":'', "text":''};	//Réinitialise notre variable user
	};
});



//augaury  ,  batarang