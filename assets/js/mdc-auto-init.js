window.mdc.autoInit();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);

const buttons = document.querySelectorAll('.mdc-button, .mdc-fab, .mdc-image-list__image-aspect-container');
for (var i = 0, button; button = buttons[i]; i++) {
  mdc.ripple.MDCRipple.attachTo(button);
}
