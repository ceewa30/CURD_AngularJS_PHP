// Application module
var crudApp = angular.module('crudApp', []);
crudApp.controller('DbaseController', function($scope, $http) {
  //function to get employee details from the database
  getEmployeeDetails();
  function getEmployeeDetails() {
  $http.get('CRUD/readEmployee.php').then(function (response) {
      $scope.details = response.data;
  });
 }

// Delete an Employee
$scope.deleteEmployee = function(data) {
  $http({
    method: "POST",
    url: "CRUD/deleteEmployee.php",
    dataType: 'json',
    data: {"del_id":data},
    headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" }
}).then(function(response) {
  //Success
  if (response == true) {
  getEmployeeDetails();
  }
 }, function(error) {
 //Error
 });
}
});
