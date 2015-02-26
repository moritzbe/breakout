$(document).ready(function(){
"use strict";
//xmlhttp requests not supported

  var munich = new google.maps.LatLng(48.150487, 11.581243)
  var url = "/welcome/data";
  var teamarray = [];
  var Liveblog = function () {

  }

  Liveblog.prototype.drawMap = function(){
    var mapOptions = {
      center: new google.maps.LatLng(48.150487, 11.581243),
      zoom: 4,
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
                // console.log(teamarray);
          callback();
        },
        error: function() {
           console.log(error);
        }
      });
  };


  function initialize() {

    var map = liveblogInstance.map;
    var i;
    teamarray.forEach(function (team) {
      console.log(team);
      var coords = team.positions;
      var route = [munich];          
      //var bounds = new google.maps.LatLngBounds ();
      distance(coords, team);

      // map.fitBounds (bounds);

      for (i = 0; i < coords.length; i++) {
        route.push(new google.maps.LatLng(coords[i].latitude, coords[i].longitude));
        // bounds.extend (LatLngList[i]);
      }

      var j;
      for (j = 1; j < coords.length; j++) {
      marker(coords, j, map);
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

  function marker(coords, j, map) {
  var marker;
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(coords[j].latitude, coords[j].longitude),
      clickable: true,
      map: map
    });
    console.log(coords[j].text);
    marker.info = new google.maps.InfoWindow({
      content: coords[j].text
    });

    google.maps.event.addListener(marker, 'click', function() {
      this.info.open(map, marker);
    }); 
  }

  function distance(coords, team){
  var distance, finaldistance;
  var destination = new google.maps.LatLng(coords[coords.length-1].latitude, coords[coords.length-1].longitude)
    distance = google.maps.geometry.spherical.computeDistanceBetween(munich, destination)/1000;
    finaldistance = distance.toFixed(1).toString()+"km"
    console.log(finaldistance);
  }

//-------------------------------------------------------------------
//Display Map
//Key=AIzaSyAq5jqy6DxgQBkk4KoTPgqEk2Pcwc0WfwE
  var liveblogInstance = new Liveblog();
  liveblogInstance.drawMap();
  liveblogInstance.getData(initialize);


  






});

