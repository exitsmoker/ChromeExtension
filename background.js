chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set({color: '#3aa757'}, function(){
        console.log("color is green");
    });
});