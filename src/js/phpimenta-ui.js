/**
 * --------------------------------------------------------------------------
 * Phpimenta UI Framework (v0.0.1)
 * Copyright 2020-2020 Phpimenta Software e Consultoria
 * Licensed under MIT (https://github.com/phpimenta/phpimenta-ui-framework/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var modals = document.querySelectorAll('.phpimenta-ui-modal');

modals.forEach((modal, index) => {
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

let dropdownTriggers = document.querySelectorAll('.phpimenta-dropdown-trigger');

dropdownTriggers.forEach(trigger => {
  trigger.addEventListener('click', function (event) {
    event.preventDefault();
    let dropdownMenu = document.getElementById(this.dataset.toggle);
    let display = window.getComputedStyle(dropdownMenu).getPropertyValue('display');
    if (display == 'none') {
      dropdownMenu.style.display = 'block';
    } else {
      dropdownMenu.style.display = 'none';
    }
  });
});

window.addEventListener('click', function (event) {
  if (event.target.classList.value == 'phpimenta-ui-modal') {
    event.target.style.display = 'none';
  }

  dropdownTriggers.forEach(trigger => {
    let dropdownMenu = document.getElementById(trigger.dataset.toggle);
    let display = window.getComputedStyle(dropdownMenu).getPropertyValue('display');
    if (trigger.dataset.toggle !== event.target.dataset.toggle) {
      if (display == 'block') {
        console.log(dropdownMenu);
        dropdownMenu.style.display = 'none';
      }
    }
  });
});

var toggles = document.querySelectorAll('button[data-toggle=modal]');

toggles.forEach(toggle => {
  toggle.addEventListener('click', function () {
    var target = toggle.dataset.target;
    modal(target, 'show');
  });
});

window.modal = function (target, event) {
  var modal = document.querySelector(target);
  if (modal != null && event == 'show') {
    modal.style.display = 'block';
  } else if (modal != null && event == 'hide') {
    modal.style.display = 'none';
  }
};
