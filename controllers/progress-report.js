angular.module('progressReportApp', ['ngCookies'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])



  .controller('progressReportController', function($scope, $http, $interval, $cookies) {
  
      //Check if logged in
      // if($cookies.get("dashManager")){
        $scope.isLoggedIn = true;
      // }
      // else{
      //   $scope.isLoggedIn = false;
      //   window.location = "adminlogin.html";
      // }

      $scope.data = [{
        subject: 'Physics',
        marks: '100'
      }, {
        subject: 'Chemistry ',
        marks: '100'
      } , {
        subject: 'Mathematics',
        marks: '100'
      }, {
        subject: 'Biology',
        marks: '100'
      }
  
    ];
      
      //Logout function
      $scope.logoutNow = function(){
        if($cookies.get("dashManager")){
          $cookies.remove("dashManager");
          window.location = "adminlogin.html";
        }
      }

      //Parameters definition

      $scope.studentData = {};
      $scope.newContentSet = function(){
   
      $scope.studentData.fName = "Muathasim";
      $scope.studentData.lName = "Mohamed";
      $scope.studentData.regNo = "AA0001";
      $scope.studentData.class = "12";
      $scope.studentData.division = "A";
      $scope.studentData.contactPhone = "9544766381";
      
     }
     $scope.newContentSet();
      
      //Schools basic info
      $scope.schoolCode = localStorage.getItem("schoolCode");
      $scope.schoolFancyName = localStorage.getItem("schoolCity");
      
     
  });
