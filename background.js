chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://classroom.google.com/";
    chrome.tabs.create({ url: newURL });
  });
