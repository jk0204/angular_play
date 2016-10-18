angular.module('playController', [])

    .controller('mainController', function($log, $scope, $http, Categories) {
        $scope.formData = {};
		$scope.results = [];
        // when landing on the page, get all todos and show them
        Categories.get()
        		.success(function(data) {
        			$log.log(data);
        			$scope.categories = data;
        			data.forEach(function(element, index) {
        			  Categories.getTest(element).success(function(result){
        			  		$log.log('result: ' + result);
        			  		$scope.results.splice(index,0, result);
        			  });
        			});
        		});
    });