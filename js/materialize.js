/*global $, jQuery*/
(function ($) {
  'use strict';
  $(function () {

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
      menuWidth: 240,
      edge: 'left',
      closeOnClick: false
    });
    $('.event-info').sideNav({
      menuWidth: 300,
      edge: 'right',
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
    $('.slider').slider({
      full_width: true,
      indicators: false,
      transition: 500,
      intervel: 12000,
      height: 460
    });
    // Models
    $('.modal-trigger').leanModal();
    // Parallax
    $('.parallax').parallax();
    // Pushpin
    $('.tabs-wrapper').pushpin({
      top: $('.tabs-wrapper').offset().top,
      offset: 64
    });
    // Scrollfire
    // Scrollspy
    // Sidenav
    // Tabs
    // Transitions
    // Waves
    var wrap = $(".tabs-wrapper").offset().top;
    var hdr = $('header .navbar-fixed').height();

    $(window).on('scroll', function () {
      if ($(window).scrollTop() + 64 >= wrap) {
        $('.site-wrapper article header').css({marginBottom: '68px'
            });
      } else {
        $('.site-wrapper article header').css({marginBottom: '0'
            });
      }
    });

  }); // end of document ready
}(jQuery)); // end of jQuery name space

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
