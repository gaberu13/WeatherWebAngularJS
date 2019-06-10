'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [])
.controller('weatherCon',function ($scope,$http) {
    var vm = $scope;
    vm.tester = "Home";
    $http({
        method:'GET',
        mode:'json',
        url:'http://ip-api.com/json'
    }).then(function (data) {
        vm.late =data.data.lat ;
        vm.lone= data.data.lon;

    });
    $http({
        method: 'GET',
        mode:'json',
        url:'http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=c9bc3074b0f956b8e2dab195b09098c7'
    }).then(function (data) {
        vm.description= data.data.list[0].weather.description;
        vm.city=data.data.city.name;
        vm.vreme=timeConverter(data.data.list[0].dt);
        vm.stepeniDenes = convertStepeni(data.data.list[0].main.temp);




    },function (error) {

        });
    //var apiKey = "c9bc3074b0f956b8e2dab195b09098c7";
       /* var openWeatherURL="https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=c9bc3074b0f956b8e2dab195b09098c7";
        $http.get(openWeatherURL).success(function (data) {
            vm.description = data.weather[0].description;

        });*/

});

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year  ;
    return time;
}
function convertStepeni(cudenBroj){
    var a = (cudenBroj-273).toFixed(1);
    return a;
}