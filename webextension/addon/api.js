var jsonView = document.querySelector("pre.ng-binding");
var data = jsonView.innerHTML; // eval('('+jsonView.textContent+')');

var newViewer = document.createElement("textarea");
newViewer.className = "json-renderer"

jsonView.appendChild(newViewer);

$('textarea.json-renderer').jsonViewer(data);