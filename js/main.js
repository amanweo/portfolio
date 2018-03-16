var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/home",{
           templateUrl : "home.html"
        })
    .when("/optin",{
        templateUrl : "optin.html"        
    })
    .otherwise({
        redirectTo : "/home"
    });
});


app.controller('myCtrl', function($scope){
   $scope.info = { contact: [
                            {email:"demo@gmail.com", phone:"+91-9876543210", location:"#123 Lorem Ipsum"}
                            ],
                        personal: [
                            {name:"John Smith", bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id laoreet urna, quis mattis quam. Morbi tellus velit, cursus eu mattis vitae, dapibus non justo. In facilisis aliquam magna, a lacinia nunc dapibus vitae. Phasellus sit amet bibendum nulla. Morbi euismod et mauris eu lacinia. Nulla ut sapien sit amet quam posuere porta ut eget nisi. In eu elit porttitor, elementum lorem in, tempor velit. In in viverra neque. Sed tempor sollicitudin erat quis consectetur. Donec semper consectetur ipsum, nec blandit massa. Maecenas consequat ipsum ac neque eleifend, id luctus nibh sollicitudin. In ultricies nisl id augue scelerisque, sollicitudin hendrerit dui euismod. Curabitur hendrerit augue quis placerat consequat. Pellentesque eget arcu id neque semper bibendum ut non tortor. Aliquam aliquam tortor sed magna gravida viverra ac a justo. Proin finibus justo id efficitur iaculis. Fusce dignissim nisl justo, ac gravida neque hendrerit at.", fname: "Villiam Smith", dob:"07/11/1990", gender:"Male", language:"Punjabi, Hindi, English"}
                        ],
                  education: [
                            {course1: "Bachelor of Computer Applications (BCA)", course2: "Masters of Computer Applications (MCA)", course3: "6 Months professional training", institute1: "Chandigarh Groups Of Colleges Landran", institute2: "Distance Learning (PTU)", institute3: "Morph Academy Chandigarh"  }
                  ],
                  
                    }
});









