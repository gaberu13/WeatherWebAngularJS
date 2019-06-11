'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [])
.controller('weatherCon',function ($scope,$http) {
    var vm = $scope;
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
        url:'http://api.openweathermap.org/data/2.5/forecast?q=Berlin,ger&appid=c9bc3074b0f956b8e2dab195b09098c7'
    }).then(function (data) {
        vm.description= data.data.list[0].weather.description;
        vm.city=data.data.city.name;
        vm.vetar = data.data.list[0].wind.speed;

        vm.slika=data.data.list[0].weather[0].icon;
        vm.slika1=data.data.list[1].weather[0].icon;
        vm.slika2=data.data.list[2].weather[0].icon;
        vm.slika3=data.data.list[3].weather[0].icon;
        vm.slika4=data.data.list[4].weather[0].icon;
        vm.slika5=data.data.list[5].weather[0].icon;
        vm.slika6=data.data.list[6].weather[0].icon;

        vm.vreme=timeConverter(data.data.list[0].dt);
        vm.vreme1=timeConverter(data.data.list[1].dt);
        vm.vreme2=timeConverter(data.data.list[2].dt);
        vm.vreme3=timeConverter(data.data.list[3].dt);
        vm.vreme4=timeConverter(data.data.list[4].dt);
        vm.vreme5=timeConverter(data.data.list[5].dt);
        vm.vreme6=timeConverter(data.data.list[6].dt);

        vm.stepeniDenes = convertStepeni(data.data.list[0].main.temp);
        vm.stepeniDenes1 = convertStepeni(data.data.list[1].main.temp);
        vm.stepeniDenes2 = convertStepeni(data.data.list[2].main.temp);
        vm.stepeniDenes3 = convertStepeni(data.data.list[3].main.temp);
        vm.stepeniDenes4 = convertStepeni(data.data.list[4].main.temp);
        vm.stepeniDenes5 = convertStepeni(data.data.list[5].main.temp);
        vm.stepeniDenes6 = convertStepeni(data.data.list[6].main.temp);





        vm.vlaznostDenes = data.data.list[0].main.humidity;




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
    var time = date + ' ' + month + ' ' + year + ' ' + hour+':00';
    return time;
}
function convertStepeni(cudenBroj){
    var a = (cudenBroj-273).toFixed(1);
    return a;
}