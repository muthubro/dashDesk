angular.module('attendanceReportApp', ['ngCookies'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])



  .controller('attendanceReportController', function($scope, $http, $interval, $cookies) {
  
      //Check if logged in
      // if($cookies.get("dashManager")){
        $scope.isLoggedIn = true;
      // }
      // else{
      //   $scope.isLoggedIn = false;
      //   window.location = "adminlogin.html";
      // }

      $scope.data = [{
        date: '18-05-2019',
        status: true
      }, {
        date: '19-05-2019 ',
        status: false
      } , {
        date: '20-05-2019',
        status: true
      }, {
        date: '21-05-2019',
        status: false
      }, {
        date: '22-05-2019',
        status: false
      }
  
    ];

    setTimeout(function(){
        $('#attendanceReportDate').datetimepicker({  
            format: "dd-mm-yyyy",
            weekStart: 1,
              todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
        })  
      }, 200);
      
      //Logout function
      $scope.logoutNow = function(){
        if($cookies.get("dashManager")){
          $cookies.remove("dashManager");
          window.location = "adminlogin.html";
        }
      }

      $scope.log = function() {
          console.log($scope.searchDate);
      }

      $scope.clearDate = function() {
        $("#attendanceReportDate").val("");
        $scope.searchDate = "";
      }
      
      $scope.clearDate();

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
