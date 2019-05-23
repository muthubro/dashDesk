angular.module('academicReportApp', ['ngCookies'])

  .config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }])



  .controller('academicReportController', function($scope, $http, $interval, $cookies) {

      //Check if logged in
      // if($cookies.get("dashManager")){
        $scope.isLoggedIn = true;
      // }
      // else{
      //   $scope.isLoggedIn = false;
      //   window.location = "adminlogin.html";
      // }

      $scope.makePdf = function() {
        html2canvas(document.getElementById('exportthis')).then(
            function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500,
                    }]
                };
                pdfMake.createPdf(docDefinition).download("Academic_Report_" + $scope.studentData.regNo + ".pdf");
            }
        );
      }

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

    $scope.attendanceData = [
        {
            date: "18-05-19",
            status: false
        },
        {
            date: "19-05-19",
            status: true
        }
    ]
      
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
