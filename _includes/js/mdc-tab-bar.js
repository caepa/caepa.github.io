function initTabs(el) {

  var tabs = window.dynamicTabBar = new mdc.tabs.MDCTabBar(document.querySelector('#' + el));
  var panels = document.querySelector('[for=' + el + ']');

  dynamicTabBar.tabs.forEach(function(tab) {
    tab.preventDefaultOnClick = true;
  });

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

  dynamicTabBar.listen('MDCTabBar:change', function (t) {
    var tabs = t.detail;
    var nthChildIndex = tabs.activeTabIndex;

    updatePanel(nthChildIndex);
  });
}

initTabs('home-tab-bar');
