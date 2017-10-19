$(document).ready(function () {
    'use strict';
  $(".scale-transition").toggleClass("scale-out").toggleClass("scale-in");
  $('.button-collapse').sideNav({closeOnClick: true});
  $('.collapsible').collapsible();
  $('.dropdown-button').dropdown({constrainWidth: false, alignment: 'right', gutter: -60});
  $('.tooltipped').tooltip({delay: 25});
  $('.slider').slider({indicators: false, height: 300});
  $('.modal').modal();
  $('#tabs').tabs(); // make table-of-contents act like tabs
  $('select').material_select();
});

// sideNav
$(function() {
  $('.side-nav li').click( function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
});

function myFunction() {
  setTimeout(function(){
    // google charts
    google.charts.load('current', {'packages':['timeline']});
    google.charts.setOnLoadCallback(dayOne);
    google.charts.setOnLoadCallback(dayTwo);
    google.charts.setOnLoadCallback(dayPre);
  }, 500);
};

window.addEventListener("resize", myFunction);
