const STUDENTS = [
    {
      roll: "Course",
      name: "MA1010",
      status: ""
    },
    {
      roll: "Teacher",
      name: "Shafeef",
      status: ""
    },
    {
      roll: "",
      name: "",
      status: ""
    },
    {
      roll: "AA0001",
      name: "Muathasim",
      status: "1"
    },
    {
      roll: "AA0002",
      name: "Abhijit",
      status: "1"
    },
    {
      roll: "AA0003",
      name: "Hari",
      status: "1"
    }
  ]

angular.module('uploadApp', ['ngCookies', 'ngSanitize'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])



  .controller('uploadController', function($scope, $http, $interval, $cookies) {

    //Check if logged in
    // if($cookies.get("zaitoonAdmin")){
      $scope.isLoggedIn = true;
    // }
    // else{
    //   $scope.isLoggedIn = false;
    //   //window.location = "adminlogin.html";
    // }

    


    //Logout function
    $scope.logoutNow = function(){
      if($cookies.get("zaitoonAdmin")){
        $cookies.remove("zaitoonAdmin");
        window.location = "adminlogin.html";
      }
    }

    $scope.outletCode = localStorage.getItem("branch");

    $scope.attendance = {};
      $scope.newContentSet = function(){
   
      $scope.attendance.class = "";
      $scope.attendance.division = "";
      $scope.attendance.date = "";
      
     }
     $scope.newContentSet();

      $scope.fetchList = function(attendance){ 
        var ws = XLSX.utils.json_to_sheet(STUDENTS, {header: ["roll", "name", "status"], skipHeader: true});
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet");
        XLSX.writeFile(wb, "out.xlsx");
      }
      
      //Schools basic info
      $scope.schoolCode = localStorage.getItem("schoolCode");
      $scope.schoolFancyName = localStorage.getItem("schoolCity");
      
      	setTimeout(function(){
        $('#marklistsDate').datetimepicker({  
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
    
    
	       
       $scope.loadPage = function(pageId) {
       
					 var items = document.getElementsByClassName("list-group-item");
					 for (var i = 0; i < items.length; i++) items.item(i).classList.remove("active");
					$scope.activeElement = pageId;
        }
        
        $scope.loadPage(1);
        
  })
  ;