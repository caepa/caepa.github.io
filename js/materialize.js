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
    // Scrollfire
    // Scrollspy
    // Sidenav
    // Tabs
    // Transitions
    // Waves


  }); // end of document ready
}(jQuery)); // end of jQuery name space

/*
  $(document).ready(function(){
    $('a.back').click(function(){
      parent.history.back();
      return false;
    });
  });
*/