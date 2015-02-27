$(document).ready(function(){
"use strict";
  $("#twitter-button").click(function(){
    window.open('https://twitter.com/BreakoutMunchen','_blank');
  })

  $("#facebook-button").click(function(){
    window.open('https://www.facebook.com/breakoutmuenchen','_blank');
  })

    $("#event_2014").click(function(){
    window.open('http://breakout-muenchen.de/','_blank');
  })

  $(".social_button").hover(function() {
    $(this).css('cursor','pointer');
  }, function() {
    $(this).css('cursor','auto');
  });





});

