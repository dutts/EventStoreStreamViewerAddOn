var jsonView = document.querySelector("pre.ng-binding");
var  data  = eval('(' + jsonView.innerText + ')');

var newViewer = document.createElement("pre");
newViewer.className = "json-renderer"

jsonView.replaceWith(newViewer);

$('pre.json-renderer').jsonViewer(data, { withQuotes: true });