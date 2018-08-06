window.mdc.autoInit();

var buttons = document.querySelectorAll('.mdc-button, .mdc-fab, .mdc-image-list__image-aspect-container');
for (var i = 0, button; button = buttons[i]; i++) {
  mdc.ripple.MDCRipple.attachTo(button);
}
