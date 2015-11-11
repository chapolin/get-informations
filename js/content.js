// Send a message containing the page details back to the event page
chrome.runtime.sendMessage({
    'html': document.head.innerHTML + document.body.innerHTML
});
