$(document).ready(function () {
    'use strict';
  $(".scale-transition").toggleClass("scale-out").toggleClass("scale-in");
  $('.button-collapse').sideNav({closeOnClick: true});
  $('.collapsible').collapsible();
  $('.dropdown-button').dropdown({constrainWidth: false, alignment: 'right', gutter: -60});
  $('.tooltipped').tooltip({delay: 25});
  $('.slider').slider({indicators: false, height: 234});
  $('.modal').modal({opacity: .7});
  $('#tabs').tabs(); // make table-of-contents act like tabs
  $('select').material_select();
  $('.scrollspy').scrollSpy();
  $('.datepicker').pickadate({
    format: 'mmmm dd, yyyy',
    formatSubmit: 'yyyy-dd-mm'
  });
  $('.stepper').activateStepper();
});
