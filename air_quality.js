/*function init() {
  var app = angular.module('myApp', []);
  app.controller('Populate', function($scope) {
    console.log("HERE Populate");
  });
}*/
/*
var app = angular.module('myApp', []);
//function populateTable(app){
app.controller('Populate', ['$scope' '$http' function($scope, $http)] {
  var coord = $('#pac-input').placeholder;
  console.log($('#pac-input').placeholder);
  console.log("here");
  console.log(coord);
  var latAndLong = ""
  var lat = latAndLong[0];
  var lng = latAndLong[1];
  var airQ = "https://api.openaq.org/v1/measurements?coordinates=" + lat + "," + lng + "&limit=5&radius=100000";
  console.log(airQ);
    $http.get(airQ).then(function(response) {
    $scope.info = response;
  })

});
*/
