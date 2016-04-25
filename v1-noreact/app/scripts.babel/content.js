/**
 * Created by maxit on 4/23/2016.
 */
console.log('content.js loaded');
var popupApp;
$.get(chrome.extension.getURL('../templates/app.html'), function (data) {
  $(data).appendTo('body');
  popupApp = new Popup();
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === 'clicked_browser_action') {
      popupApp.toggleApp();
    }
  }
);