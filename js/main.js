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
    $scope.list = [
                   {sr:"3", name: "Demo", lastname: "Testing"},
                    {sr:"1", name: "Amandeep", lastname: "Singh"},
                   {sr:"2", name: "Testing", lastname: "Testing"}
                  ];    
    
//    $scope.orderByMe = function(x){
//        $scope.sortlist = x;
//    }
});
app.controller('categ', function($scope){    
   $scope.categ = {category: [
                        {categName:"Single tracks"},
                        {categName:"All Music"},
                        {categName:"Punjabi Music"},
                        {categName:"Bollywood Music"},
                        {categName:"Singer Collection"},
                        {categName:"Punjabi Videos"},
                        {categName:"Bollywood Videos"}
                        ],
                        updateList: [
                         {upList:"abc"},
                         {upList:"abc"},
                         {upList:"abc"},
                    ]
    }
})









