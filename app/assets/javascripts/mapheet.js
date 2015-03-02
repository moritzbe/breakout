//Global Stuff


function distance(coords){
    var distance, finaldistance;
  if(coords.length >0) {
    var destination = new google.maps.LatLng(coords[coords.length-1].latitude, coords[coords.length-1].longitude)
    distance = google.maps.geometry.spherical.computeDistanceBetween(munich, destination)/1000;
    finaldistance = distance.toFixed(1).toString()+"km"
    console.log(finaldistance);
    return finaldistance;
  }
    finaldistance ="0km";
    return finaldistance;
  
}



//Upon Load
$(document).ready(function(){
"use strict";



  var munich = window.munich = new google.maps.LatLng(48.150487, 11.581243)
  var url = "/welcome/data";
  var teamarray = [];
  var Liveblog = window.Liveblog = function () {

  }

  Liveblog.prototype.drawMap = function(){
    var mapOptions = {
      center: new google.maps.LatLng(48.150487, 11.581243),
      zoom: 4,
      styles: styleday(style),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
    };

    this.map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
  };

  Liveblog.prototype.getData = function(){
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
                  distance: dataItem.positions[dataItem.positions.length-1].distance,
                  player1: dataItem.players[0].prename,
                  player2: dataItem.players[1].prename,
                  messages: dataItem.messages,
                  positions: dataItem.positions,
                };
                teamarray.push(team);
          });
          initialize();
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
      distance(coords);

      // map.fitBounds (bounds);

      for (i = 0; i < coords.length; i++) {
        route.push(new google.maps.LatLng(coords[i].latitude, coords[i].longitude));
        // bounds.extend (LatLngList[i]);
      
      }

      marker(coords, team, map);

      var flightPath = new google.maps.Polyline({
        path:route,
        strokeColor: team.teamcolor,
        strokeOpacity: 1.0,
        strokeWeight: 3
      });  
      flightPath.setMap(map); 
    }); 
};

  function marker(coords, team, map) {
    var marker;
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(coords[coords.length-1].latitude, coords[coords.length-1].longitude),
      // clickable: true,
      map: map
    });
 
    var infowindow = new google.maps.InfoWindow({
        content: makeContent(team)
    });
 
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  }

  function makeContent(team) {
    var messages = "";
    for (var i = 0; i < team.positions.length; i++) {
      messages += "<p>"+team.positions[i].text+"</p>";
    }

    var contentstring = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">'+team.teamname+' - Team '+team.teamnumber+'</h4>'+
      '<p><b>'+team.player1+' and '+team.player2+', Distance: '+team.distance+'km</b></p>'+
      '<div>'+messages+

      '</div>';
    return contentstring;
  }


//-------------------------------------------------------------------
//Display Map
//Key=AIzaSyAq5jqy6DxgQBkk4KoTPgqEk2Pcwc0WfwE
  // var liveblogInstance = new Liveblog();
  // liveblogInstance.drawMap();
  // liveblogInstance.getData(initialize);

var style = [];
var date = new Date();
console.log(date.getHours());
var hour = date.getHours();
var styleday = function(style){
  if(6 < hour && hour < 20) {
    style = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}];
    return style;
  } else { style = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}];
  return style;    
  }
}


});

