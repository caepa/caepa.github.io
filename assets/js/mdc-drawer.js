function initDrawer(el) {

  const buttonEl = document.querySelector('#' + el);
  const drawer = new mdc.drawer.MDCDrawer(document.querySelector('[for=' + el + ']'));

  buttonEl.addEventListener('click', () => drawer.open = !drawer.open);
}

initDrawer('apps')
