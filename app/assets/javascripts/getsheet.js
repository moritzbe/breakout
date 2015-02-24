$(document).ready(function(){
"use strict";
//xmlhttp requests not supported

  var Liveblog = function () {
    this.lat;
    this.lon;
  };



  var liveblogInstance = new Liveblog();

  function onSuccess(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    console.log(lat);
    document.getElementById("latitude").innerHTML = lat;
    document.getElementById("longitude").innerHTML = lon;
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


  function getData(){
    console.log("start");
    var url = "/welcome/map";
    var result;
    $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: function(data) {
          console.log(data);
          var positionarray = [];
          data.forEach(function(entry){
          var lat = entry.latitude;
          var lon = entry.longitude;
          positionarray.push([lat, lon]);
          this.result = positionarray;
        });
          console.log(result)
      },
      error: function() {
         console.log(error);
      }
    });
  }

  function onError(error){
    alert("Geolocation error: " + error);
  } 
  
  $("#getLocation").on("click", function() {
    if (navigator.geolocation) {
      console.log("Geolocation is supported!");
      // Get permission and geolocation
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
      var options = {enableHighAccuracy: true, maximumAge:30000, timeout: 60000};
      navigator.geolocation.watchPosition(onSuccess, onError, options); 
    };
  });

  $("#getAddress").on("click", function() {
    if (navigator.geolocation) {
      console.log("Geolocation is supported!");
      // Get permission and geolocation
      navigator.geolocation.getCurrentPosition(onSuccess2, onError);
      var options = {enableHighAccuracy: true, maximumAge:30000, timeout: 60000};
      navigator.geolocation.watchPosition(onSuccess, onError, options); 
    };
  });

  $("#getData").on("click", getData);
//-------------------------------------------------------------------
//Display Map
//Key=AIzaSyAq5jqy6DxgQBkk4KoTPgqEk2Pcwc0WfwE
  $("#showMap").on("click", function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(48.150487, 11.581243),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        console.log(positionarray);
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);

        positionarray = getData();

        var marker, i;
        for (i = 0; i < positionarray.size; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(positionarray[i][0], positionarray[i][1]),
            map: map
          });
        };

  });























});

//https://www.google.com.au/maps/preview/@-15.623037,18.388672,8z