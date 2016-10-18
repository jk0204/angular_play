angular.module('playService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Categories', function($http) {
        return {
            get : function() {
                return $http.get('/api/category');
            },
            getTest : function(test) {
                return $http.get('/api/' + test);
            }
        }
    });