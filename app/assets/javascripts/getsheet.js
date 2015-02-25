$(document).ready(function(){
"use strict";
//xmlhttp requests not supported

  var munich = [48.150487, 11.581243]
  var url = "/welcome/data";
  var teamarray = [];
  var Liveblog = function () {

  }

  Liveblog.prototype.drawMap = function(){
    var mapOptions = {
      center: new google.maps.LatLng(48.150487, 11.581243),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
  };

  Liveblog.prototype.getData = function(callback){
    var self = this;
      $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function(data) {
          data.forEach(function(dataItem) {
                var team = { 
                  teamnumber: dataItem.team.id,
                  teamname: dataItem.team.teamname,
                  teamcolor: dataItem.team.teamcolor,
                  player1: dataItem.players[0].prename,
                  player2: dataItem.players[1].prename,
                  messages: dataItem.messages,
                  positions: dataItem.positions,
                };
                teamarray.push(team);
          });
                console.log(teamarray);
                callback();
        },
        error: function() {
           console.log(error);
        }
      });
  };



  function initialize() {

        var marker, i;
        var map = liveblogInstance.map;

        teamarray.forEach(function (team) {
          console.log(team);
          var coords = team.positions;
          var route = [new google.maps.LatLng(munich[0], munich[1])];

          for (i = 0; i < coords.length; i++) {
            route.push(new google.maps.LatLng(coords[i].latitude, coords[i].longitude));
          }
          for (i = 1; i < coords.length; i++) {
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(coords[i].latitude, coords[i].longitude),
              map: map
            });
          }
          
          var flightPath = new google.maps.Polyline({
            path:route,
            strokeColor: team.teamcolor,
            strokeOpacity: 1.0,
            strokeWeight: 3
          });  
          flightPath.setMap(map); 

        }); 

     
  };

//-------------------------------------------------------------------
//Display Map
//Key=AIzaSyAq5jqy6DxgQBkk4KoTPgqEk2Pcwc0WfwE
  var liveblogInstance = new Liveblog();
  liveblogInstance.drawMap();
  liveblogInstance.getData(initialize);
  



  // Liveblog.prototype.getPositions = function(callback){
  //   var self = this;
  //   $.ajax({
  //     type: "GET",
  //     url: url,
  //     dataType: "json",
  //     success: function(data) {
  //         data.forEach(function(entry){
  //           var lat = entry.latitude;
  //           var lon = entry.longitude;
  //           self.positions.push([lat, lon]);
  //           callback();
  //         });
  //     },
  //     error: function() {
  //        console.log(error);
  //     }
  //   });
  // };

  // Liveblog.prototype.onSuccess = function () {
  //   var self = this;
  //   var lat = this.position.coords.latitude;
  //   var lon = this.position.coords.longitude;
  //   var position = [lat, lon];
  //   self.positions.push(position);
  //   document.getElementById("latitude").innerHTML = this.lat;
  //   document.getElementById("longitude").innerHTML = this.lon;
  // };

  // Liveblog.prototype.onSuccess2 = function () {
  //   this.onSuccess();
  // };

  // Liveblog.prototype.addShowMapListener = function {
  //   $("#showMap").on("click", function initialize() {
  //       var mapOptions = {
  //         center: new google.maps.LatLng(munich[0], munich[1]),
  //         zoom: 10,
  //         mapTypeId: google.maps.MapTypeId.ROADMAP
  //       };
  //       console.log(positionarray);
  //       var map = new google.maps.Map(document.getElementById("map_canvas"),
  //           mapOptions);

  //       positionarray = getData();

  //       var marker, i;
  //       for (i = 0; i < positionarray.size; i++) {  
  //         marker = new google.maps.Marker({
  //           position: new google.maps.LatLng(positionarray[i][0], positionarray[i][1]),
  //           map: map
  //         });
  //       };

  //   });
  // };


  // Liveblog.prototype.getGeolocation = function(callback) {
  // $("#getLocation").on("click", function() {
  //   if (navigator.geolocation) {
  //     console.log("Geolocation is supported!");
  //     // Get permission and geolocation
  //     navigator.geolocation.getCurrentPosition(callback, onError);
  //     var options = {enableHighAccuracy: true, maximumAge:30000, timeout: 60000};
  //     navigator.geolocation.watchPosition(onSuccess, onError, options); 
  //   };
  // });
  // }

  // Liveblog.prototype.getAdress = function(callback) {
  // $("#getAddress").on("click", function() {
  //   if (navigator.geolocation) {
  //     console.log("Geolocation is supported!");
  //     // Get permission and geolocation
  //     navigator.geolocation.getCurrentPosition(callback, onError);
  //     var options = {enableHighAccuracy: true, maximumAge:30000, timeout: 60000};
  //     navigator.geolocation.watchPosition(onSuccess, onError, options); 
  //   };
  // });
  // } 

  // function onSuccess2(position){
  //   var lat = position.coords.latitude;
  //   var lon = position.coords.longitude;
  //   var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lon+"&sensor=true_or_false";
  //     $.ajax(url, {
  //     success: function(data) {
  //        console.log(data.results[0].formatted_address);
  //        var address = data.results[0].formatted_address;
  //        document.getElementById("address").innerHTML = address;

  //     },
  //     error: function() {
  //        console.log(error);
  //     }
  //   });
  // }


  // function onError(error){
  //   alert("Geolocation error: " + error);
  // } 




});

//https://www.google.com.au/maps/preview/@-15.623037,18.388672,8z