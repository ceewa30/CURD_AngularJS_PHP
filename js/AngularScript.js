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
$scope.addForm = true;
 $scope.formToggle = function() {
   $scope.addForm = false;
 }
// Create an Employee Details
$scope.createInfo = function(empInfo) {
  $http({
    method: "POST",
    url: "CRUD/createEmployee.php",
    dataType: 'json',
    data: {"emp_name":empInfo.name,"emp_email":empInfo.email,"emp_gender":empInfo.gender,"emp_address":empInfo.address},
    headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" }
}).then(function(data){
  if (data.status == 200) {
    getEmployeeDetails();
    // Hide details insertion form
    $('#empForm').css('display', 'none');
    $scope.addForm = true;
  }
});
}
$scope.editForm = true;
$scope.currentUser = {};
$scope.editEmployee = function(data) {
$scope.currentUser = data;
$scope.show_form = false;
$scope.editForm = false;
$('#empForm').hide();
}
//Edit an Employee
$scope.updateEmployee = function(data) {
  $http({
    method: "POST",
    url: "CRUD/editEmployee.php",
    dataType: 'json',
    data: {"emp_id":data.emp_id,"emp_name":data.emp_name,"emp_email":data.emp_email,"emp_gender":data.emp_gender,"emp_address":data.emp_address},
    headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" }
}).then(function(response) {
  //Success
  if (response.status == 200) {
  getEmployeeDetails();
  $scope.editForm = true;
  $scope.show_form = true;
  }
 }, function(error) {
 //Error
 });
}

// Delete an Employee
$scope.deleteEmployee = function(data) {
  $http({
    method: "POST",
    url: "CRUD/deleteEmployee.php",
    dataType: 'json',
    data: {"del_id":data.emp_id},
    headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" }
}).then(function(response) {
  //Success
  if (response.status == 200) {
  getEmployeeDetails();
  }
 }, function(error) {
 //Error
 });
}
$scope.formHide = function(){
  $scope.addForm = true;
  $scope.editForm = true;
  $scope.show_form = true;
}
});
