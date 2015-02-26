$(document).ready(function(){
"use strict";



  Liveblog.prototype.onSuccess = function () {
    var self = this;
    var lat = this.position.coords.latitude;
    var lon = this.position.coords.longitude;
    var position = [lat, lon];
    self.positions.push(position);
    document.getElementById("latitude").innerHTML = this.lat;
    document.getElementById("longitude").innerHTML = this.lon;
  };

  Liveblog.prototype.onSuccess2 = function () {
    this.onSuccess();
  };



  function getGeolocation(callback) {
  $("#getLocation").on("click", function() {
    if (navigator.geolocation) {
      console.log("Geolocation is supported!");
      // Get permission and geolocation
      navigator.geolocation.getCurrentPosition(callback, onError);
      var options = {enableHighAccuracy: true, maximumAge:30000, timeout: 60000};
      navigator.geolocation.watchPosition(onSuccess, onError, options); 
    };
  });
  }

  Liveblog.prototype.getAdress = function(callback) {
  $("#getAddress").on("click", function() {
    if (navigator.geolocation) {
      console.log("Geolocation is supported!");
      // Get permission and geolocation
      navigator.geolocation.getCurrentPosition(callback, onError);
      var options = {enableHighAccuracy: true, maximumAge:30000, timeout: 60000};
      navigator.geolocation.watchPosition(onSuccess, onError, options); 
    };
  });
  } 

  function onSuccess2(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lon+"&sensor=true_or_false";
      $.ajax(url, {
      success: function(data) {
         console.log(data.results[0].formatted_address);
         var address = data.results[0].formatted_address;
         document.getElementById("address").innerHTML = address;

      },
      error: function() {
         console.log(error);
      }
    });
  }


  function onError(error){
    alert("Geolocation error: " + error);
  } 


});