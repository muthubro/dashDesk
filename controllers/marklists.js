const STUDENTS = [
  {
    roll: "AA0001",
    name: "Muathasim",
    marks: "0"
  },
  {
    roll: "AA0002",
    name: "Abhijit",
    marks: "0"
  },
  {
    roll: "AA0003",
    name: "Hari",
    marks: "0"
  }
]


angular.module('marklistsApp', ['ngCookies'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])



  .controller('marklistsController', function($scope, $http, $interval, $cookies) {
  
      //Check if logged in
      // if($cookies.get("dashManager")){
        $scope.isLoggedIn = true;
      // }
      // else{
      //   $scope.isLoggedIn = false;
      //   window.location = "adminlogin.html";
      // }
      
      //Logout function
      $scope.logoutNow = function(){
        if($cookies.get("dashManager")){
          $cookies.remove("dashManager");
          window.location = "adminlogin.html";
        }
      }

      //Parameters definition

      $scope.marklists = {};
      $scope.newContentSet = function(){
   
      $scope.marklists.class = "";
      $scope.marklists.division = "";
      $scope.marklists.date = "";
      
     }
     $scope.newContentSet();

      $scope.fetchMarklist = function(marklists){

      // var co_data = {};

      //      co_data.token = $cookies.get("dashManager");
      //      co_data.class = marklists.class;
      //      co_data.division = marklists.division;
      //      co_data.date = document.getElementById('marklistsDate').value;

      //      console.log(co_data);


      //      $http({
      //        method  : 'POST',
      //        url     : 'http://www.schooldash.xyz/services/fetchmarklistslist.php',
      //        data    : co_data,
      //        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
      //       })
      //       .then(function(response) {

      //    if(response.data.status){          

      //    }
      //    else{
      //       $scope.deleteError = response.data.error;
      //    }
      //       });    
        var json = [];
        json.push({roll: "Course", name: "MA1020", status: ""});
        json.push({roll: "Teacher", name: "Shafeef", status: ""});
        json.push({roll: "Class", name: marklists.class + "-" + marklists.division, status: ""});
        json.push({roll: "", name: "", status: ""});
        json = json.concat(STUDENTS); 

        var ws = XLSX.utils.json_to_sheet(json, {header: ["roll", "name", "marks"], skipHeader: true});
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

      $scope.openType = function (type){

      //Styling
      switch(type) {
          case 'upload':
          {          
             document.getElementById("firstIcon").style.color = "#FFF";
             document.getElementById("firstTag").style.color = "#FFF";
             document.getElementById("firstCount").style.color = "#FFF";
             document.getElementById("firstTabButton").style.background="#2980b9";
         
             document.getElementById("secondIcon").style.color = "#ABB2B9";
             document.getElementById("secondTag").style.color = "#ABB2B9";
             document.getElementById("secondCount").style.color = "#ABB2B9";
             document.getElementById("secondTabButton").style.background="#F1F1F1";
              
                  break;
          }
          case 'select':
          {
             document.getElementById("secondIcon").style.color = "#FFF";
             document.getElementById("secondTag").style.color = "#FFF";
             document.getElementById("secondCount").style.color = "#FFF";
             document.getElementById("secondTabButton").style.background="#2980b9";
         
             document.getElementById("firstIcon").style.color = "#ABB2B9";
             document.getElementById("firstTag").style.color = "#ABB2B9";
             document.getElementById("firstCount").style.color = "#ABB2B9";
             document.getElementById("firstTabButton").style.background="#F1F1F1";
              
                  break;
          }
      } 
   }
      
     
  });