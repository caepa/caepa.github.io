// Instantiation
  var menuEl = document.querySelector('#apps-menu');
  var menu = new mdc.menu.MDCMenu(menuEl);
  var menuButtonEl = document.querySelector('#apps');

  // Toggle menu open
  menuButtonEl.addEventListener('click', function() {
    menu.open = !menu.open;
  });

  // Listen for selected item
  menuEl.addEventListener('MDCMenu:selected', function(evt) {
     var detail = evt.detail;
  });

  // Set Anchor Corner to Bottom End
  //menu.setAnchorCorner(Corner.BOTTOM_END);

  // Turn off menu open animations
  //menu.quickOpen = true;
