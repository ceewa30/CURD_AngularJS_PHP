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
$scope.createInfo = function(empInfo) {
  $http({
    method: "POST",
    url: "CRUD/createEmployee.php",
    dataType: 'json',
    data: {"emp_name":empInfo.name,"emp_email":empInfo.email,"emp_gender":empInfo.gender,"emp_address":empInfo.address},
    headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" }
}).then(function(data){
  console.log(data);
//  $http.post('CRUD/createEmployee.php',{"emp_name":info.emp_name,"emp_email":info.emp_email,"emp_gender":info.emp_gender,"emp_address":info.emp_address}).then(function(data){
  if (data.status == 200) {
    getEmployeeDetails();
    // Hide details insertion form
    //document.getElementById("empForm").hidden = true;
    $('#empForm').css('display', 'none');
  }
});
}
$scope.currentUser = {};
$scope.editEmployee = function(data) {
$scope.currentUser = data;
//console.log($scope.currentUser);
$('#empForm').slideUp();
$('#editForm').slideToggle();
document.getElementById("editForm").hidden = false;
}
//Edit an Employee
// $scope.editEmployee = function(data) {
//   console.log(data);
//   $http({
//     method: "POST",
//     url: "CRUD/editEmployee.php",
//     dataType: 'json',
//     data: {"emp_id":data},
//     headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" }
// }).then(function(response) {
//   console.log(response);
//   //Success
//   // if (response.status == 200) {
//   // getEmployeeDetails();
//   // }
//  }, function(error) {
//  //Error
//  });
// }

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
});
