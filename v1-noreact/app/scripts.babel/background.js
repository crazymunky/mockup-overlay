'use strict';


// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener((tab) => {
  // Send a message to the active tab
  console.log('browser extrension action clicked');
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {'message': 'clicked_browser_action'});
  });
});