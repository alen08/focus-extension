const dummyRestrictedUrl = 'https://foo.bar';

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'loading' && tab.url === dummyRestrictedUrl) {
    chrome.tabs.executeScript(tabId, { file: 'content.js' });
  }
});
