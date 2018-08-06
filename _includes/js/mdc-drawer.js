function myFunction(x) {


  if (x.matches) {
    document.querySelector('.mdc-drawer').classList.add('mdc-drawer--temporary');
    document.querySelector('.mdc-drawer').classList.remove('mdc-drawer--persistent', 'mdc-drawer--open');
    let drawer = new mdc.drawer.MDCTemporaryDrawer(drawerEl);
    menuEl.addEventListener('click', () => drawer.open = !drawer.open);
  } else {
    document.querySelector('.mdc-drawer').classList.remove('mdc-drawer--temporary');
    document.querySelector('.mdc-drawer').classList.add('mdc-drawer--persistent', 'mdc-drawer--open');
    let drawer = new mdc.drawer.MDCPersistentDrawer(drawerEl);
    menuEl.addEventListener('click', () => drawer.open = !drawer.open);
  }



}
var drawerEl = document.querySelector('.mdc-drawer');
var menuEl = document.querySelector('#menu');

var x = window.matchMedia("(max-width: 1023px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


//let drawer = new mdc.drawer.MDCPersistentDrawer(document.querySelector('.mdc-drawer'));

//rewrite this
//window.addEventListener('resize', function() {
//    if($(window).width() > 400) {
//        $('#body').addClass('limit1200');
//        $('#body').removeClass('limit400');
//    }else{
//        $('#body').addClass('limit400');
//        $('#body').removeClass('limit1200');
//    }
//})
