function initMenu(el) {

  var menu = window.dynamicMenu = new mdc.menu.MDCMenu(document.querySelector('#' + el + '-menu'));
  var menuButtonEl = document.querySelector('#' + el);

  menuButtonEl.addEventListener('click', function() {
    menu.open = !menu.open;
  });
}

initMenu('apps');
