const dummyRestrictedUrl = 'https://foo.bar';

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // The tab has 3 statuses, so without this condition, it would fire each time. Each time counts as an update.
  if (changeInfo.status === 'complete') {
    chrome.extension.getBackgroundPage().console.log(tab.url);
    if (tab.url === dummyRestrictedUrl) {
      chrome.tabs.executeScript(tabId, {
        file: 'content.js',
      });
    }
  }
});
