function initTabs(el) {

  var tabBar = window.dynamicTabBar = new mdc.tabBar.MDCTabBar(document.querySelector('#' + el));
  var panels = document.querySelector('[for=' + el + ']');


  function updatePanel(index) {
    var activePanel = panels.querySelector('.panel.active');
    if (activePanel) {
      activePanel.classList.remove('active');
      activePanel.setAttribute('aria-hidden', 'true');
    }
    var newActivePanel = panels.querySelector('.panel:nth-child(' + (index + 1) + ')');
    if (newActivePanel) {
      newActivePanel.classList.add('active');
      newActivePanel.setAttribute('aria-hidden', 'false');
    }
  };

  dynamicTabBar.listen('MDCTabBar:activated', function (t) {
    var tabs = t.detail;
    var nthChildIndex = tabs.index;

    updatePanel(nthChildIndex);
  });
}

initTabs('home-tab-bar');
