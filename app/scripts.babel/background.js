'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(null, {file: 'jquery.min.js'}, () => {
    console.log('\'Allo \'Jquery loaded');
    chrome.tabs.executeScript(null, {file: 'background.js'}, ()=>{
      console.log('\'Allo \'Jquery loaded');
    });
  });
});
console.log('\'Allo \'Allo! Event Page');
