function onPageDetailsReceived(pageDetails)  {
  var html = pageDetails.html, regExpArr = [], itensData = getValue();

  $("div.container").html("");

  for(var i in itensData) {
    var result = null, value = "N&atilde;o encontrado.", itemHtml = "";
    
    regExpArr[i] = new RegExp(itensData[i] + "\\\"?\\s*[=:]\\s*\\\"?([^\\\"]+|[^,]+),*", "im");
    
    result = regExpArr[i].exec(html);
    
    if(result && result.length > 0) {
      value = result[1];
    }
    
    itemHtml = '<p><strong for="title">' + itensData[i] + 
    ':</strong><br /><span>' + value.replace(/\s*,\s*$/, "") + '</span></p><br /><hr />';
      
    $("div.container").after(itemHtml);
  }
  
  if(itensData.length === 0) {
    $("div.container").html("Nenhum elemento cadastrado ainda!");
  }
}

// Global reference to the status display SPAN
var statusDisplay = null;

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
    // Cache a reference to the status display SPAN
    statusDisplay = document.getElementById('status-display');
    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in
        // our onPageDetailsReceived function as the callback. This injects
        // content.js into the current tab's HTML
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});
