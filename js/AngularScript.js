// Application module
// var crudApp = angular.module('crudApp',[]);
// crudApp.controller('DbaseController',['$scope', '$http', function($scope,$http) {
//
//   //function to get employee details from the database
//   getInfo();
//   function getInfo() {
//     // sending request to readEmployee.php files
//     $http.get('CRUD/readEmployee.php').then(function(data) {
//       // Stored the returned data into scope
//       $scope.details = data;
//     });
//   }
// }])

var crudApp = angular.module('crudApp', []);
crudApp.controller('DbaseController', function($scope, $http) {
  $http.get("CRUD/readEmployee.php").then(function (response) {
      $scope.details = response.data;
      console.log($scope.details);
  });
});
