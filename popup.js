document.getElementById('btsend').onclick = () => {
    chrome.tabs.executeScript({file: 'content.js'});
};