//TODO: Receive restricted URLs from storage
const dummyRestrictedUrls = ['https://foo.bar', 'https://bar.baz'];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'loading' && dummyRestrictedUrls.includes(tab.url)) {
    chrome.tabs.executeScript(tabId, { file: 'content.js' });
  }
});
