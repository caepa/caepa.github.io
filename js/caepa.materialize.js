$(document).ready(function () {
  'use strict';

  /*  Components */
  // Badges
  // Buttons
  // Breadcrumbs
  // Cards
  // Chips
  // Collections
  // Footer
  // Forms
  $('select').material_select();
  // Icons
  // Navbar
  $('.button-collapse').sideNav({
    menuWidth: 300,
    edge: 'left',
    closeOnClick: false
  });
  // Pagination
  // Preloader

  /* JavaScript */
  // Collapsible
  $('.collapsible').collapsible();
  // Dialogs
  $('.tooltipped').tooltip({
    delay: 25
  });
  // Dropdown
  // Media
  // Models
  $('.modal-trigger').leanModal();
  // Parallax
  $('.parallax').parallax();
  // Pushpin
  // Scrollfire
  // Scrollspy
  // Sidenav
  // Tabs
  $('#tabs').tabs(); // make table-of-contents act like tabs
  // Transitions
  // Waves
  // ************** //
});
             
$(window).on("load resize", function () {
  'use strict';
  var toc = $('#rendezvous #toc');
  if (document.documentElement.clientWidth > 601) {
    // change tabs to table-of-contents
    $('#rendezvous #toc ul').removeClass("tabs").addClass("table-of-contents");
    // reposition page-content next to table of contents
    $('#rendezvous #page-content').css({ marginTop: -toc.outerHeight()+-20 });
  } else {
    // change table-of-contents to tabs
    $('#rendezvous #toc ul').addClass("tabs").removeClass("table-of-contents");
    // reposition page-content next to table of contents
    $('#rendezvous #page-content').css({ marginTop: -toc.outerHeight()+38 });
  }
  // google charts
  google.charts.load('current', {'packages':['timeline']});
  google.charts.setOnLoadCallback(dayOne);  
  google.charts.setOnLoadCallback(dayTwo);
});

function myFunction() {
  setTimeout(function(){
    // google charts
    google.charts.load('current', {'packages':['timeline']});
    google.charts.setOnLoadCallback(dayOne);  
    google.charts.setOnLoadCallback(dayTwo);
  }, 500);
}

/* use this to create a dynamic back button
$(document).ready(function(){
$('a.back').click(function(){
  parent.history.back();
  return false;
});
});
*/
/* use this to dynamiclly set class active on list
$(document).ready(function () {
'use strict';
$('.collapsible-body ul li a').click(function () {
$('.collapsible-body ul li').removeClass('active');
$(this).closest('.collapsible-body ul li').addClass('active');
});
});
*/