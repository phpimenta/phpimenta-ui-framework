"use strict";

var modals = document.querySelectorAll('.phpimenta-ui-modal');
modals.forEach(function (modal, index) {
  var elements = modal.children[0].children[0].children;
  var total = elements.length;

  for (var i = 0; i < total; i++) {
    var element = elements[i];

    if (element.classList.value == 'btn-close') {
      element.addEventListener('click', function () {
        window.modal('#' + modal.id, 'hide');
      });
    }
  }
});
var toggles = document.querySelectorAll('button[data-toggle=modal]');
toggles.forEach(function (toggle) {
  toggle.addEventListener('click', function () {
    var target = toggle.dataset.target;
    modal(target, 'show');
  });
});
window.addEventListener('click', function (event) {
  if (event.target.classList.value == 'phpimenta-ui-modal') {
    event.target.style.display = 'none';
  }
});

window.modal = function (target, event) {
  var modal = document.querySelector(target);

  if (modal != null && event == 'show') {
    modal.style.display = 'block';
  } else if (modal != null && event == 'hide') {
    modal.style.display = 'none';
  }
};
//# sourceMappingURL=modal.js.map
