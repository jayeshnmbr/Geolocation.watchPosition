/**
 * Created by jayesh on 2/3/16.
 */
ApolloLite.controller('gpsCntrl', function($scope, $cordovaGeolocation) {

  $scope.test = "testing";
  //watching the change in position of the driver
  $scope.gpsCoordinates = [];
  var watchOptions = {timeout : 3000, enableHighAccuracy: false};
  var watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(null, function(err) {console.log(err)}, function(position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      var gpsArray = {Latvalue:lat,Longvalue:long}
      $scope.latitude=lat
      $scope.longitude=long
      $scope.gpsCoordinates.push(gpsArray)

      console.log("watching position.."+lat + '..' + long)
    }

  );

  //watch.clearWatch();

//get the current position of the driver

  /*var posOptions = {timeout: 10000, enableHighAccuracy: false};
   $cordovaGeolocation
   .getCurrentPosition(posOptions)
   .then(function (position) {
   var lat  = position.coords.latitude
   var long = position.coords.longitude
   $scope.latitude=lat
   $scope.longitude=long
   console.log("currentposition.."+lat + '...' + long)
   }, function(err) {
   console.log("error--"+err);
   });*/



})


ApolloLite.controller('homeCntrl', function($scope) {

  $scope.driver="Alex Jacobson";
  $scope.teleNmbr="675-567-7865";
  $scope.item="Apple";
  $scope.weight="3000lbs";
  $scope.deliverydate="03/02/2016";
  $scope.truckNo="AR-56738";


})
