// Application module
var crudApp = angular.module('crudApp', []);
crudApp.controller('DbaseController', function($scope, $http, $element) {
  //function to get employee details from the database
  getEmployeeDetails();
  function getEmployeeDetails() {
  $http.get('CRUD/readEmployee.php').then(function (response) {
      $scope.details = response.data;
  });
 }
$scope.show_form = true;
 $scope.formToggle = function() {
   document.getElementById("empForm").hidden = false;
 }
// Create an Employee Details
$scope.createInfo = function(info) {
  console.log("hai");
  $http({
    method: "POST",
    url: "CRUD/createEmployee.php",
    dataType: 'json',
    data: {"emp_name":info.emp_name,"emp_email":info.emp_email,"emp_gender":info.emp_gender,"emp_address":info.emp_address},
    headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" }
}).then(function(data){
//  $http.post('CRUD/createEmployee.php',{"emp_name":info.emp_name,"emp_email":info.emp_email,"emp_gender":info.emp_gender,"emp_address":info.emp_address}).then(function(data){
  if (data == true) {
    getEmployeeDetails();
    // Hide details insertion form
    $('#empForm').css('display', 'none');
  }
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
