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
   $scope.categ = {
       category: [
                {categName:"Single tracks"},
                {categName:"All Music"},
                {categName:"Punjabi Music"},
                {categName:"Bollywood Music"},
                {categName:"Singer Collection"},
                {categName:"Punjabi Videos"},
                {categName:"Bollywood Videos"}
                ],
                updateList: [
                 {upList:"Single Track", trackName:"Track 1", trackName2:"Track 2", trackName3:"Track 3",artist1:"Artist 1", artist2:"Artist 2", artist3:"Artist 3", artist4:"Artist 4", artist5:"Artist 5"},
                 {upList:"Punjabi Album", trackName:"Album 1", trackName2:"Album 2", trackName3:"Album 3",artist1:"Artist 1", artist2:"Artist 2", artist3:"Artist 3", artist4:"Artist 4", artist5:"Artist 5"},
                 {upList:"Bollywood Album", trackName:"Album 1", trackName2:"Album 2", trackName3:"Album 3",artist1:"Artist 1", artist2:"Artist 2", artist3:"Artist 3", artist4:"Artist 4", artist5:"Artist 5"}
            ]
                
    }
})









