"use strict";

var files = document.querySelectorAll('.phpimenta-ui-upload input[type=file]');
files.forEach(function (file) {
  file.addEventListener('change', function (event) {
    var files = [];
    Array.from(this.files).forEach(function (file) {
      files.push(' ' + file.name);
    });
    var label;
    Array.from(this.parentElement.children).forEach(function (node) {
      if (node.nodeName == "LABEL") {
        label = node;
      }
    });
    label.innerHTML = files.toString();
  });
});
//# sourceMappingURL=upload.js.map
