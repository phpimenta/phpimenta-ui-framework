"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dropdown = /*#__PURE__*/function () {
  function Dropdown() {
    _classCallCheck(this, Dropdown);

    this.counter = 0;
  }

  _createClass(Dropdown, [{
    key: "enable",
    value: function enable() {
      var self = this;
      window.addEventListener('click', function (event) {
        if (event.target.classList.value.split(' ').indexOf('dropdown-toggle') == -1) {
          self.hideContent();
        }
      });
      var dropdowns = document.querySelectorAll('.phpimenta-ui-dropdown');
      dropdowns.forEach(function (dropdown) {
        Array.from(dropdown.children).forEach(function (children) {
          if (children.classList.toString().split('dropdown-toggle')) {
            children.addEventListener('click', function (event) {
              event.preventDefault();
              self.hideContent(event.target.dataset.index);
              var content = self.getContent(event.target);
              var display = window.getComputedStyle(content).getPropertyValue('display');

              if (event.target.dataset.index == undefined) {
                event.target.dataset.index = self.counter;
                content.dataset.index = self.counter;
                self.counter++;
              }

              if (display == 'none') {
                content.style.display = 'block';
              } else {
                content.style.display = 'none';
              }
            });
          }
        });
      });
    }
  }, {
    key: "getContent",
    value: function getContent(target) {
      var dropdown = Array.from(target.parentElement.children);
      var selectedItem = null;
      dropdown.forEach(function (item) {
        if (item.classList.toString().match(/phpimenta-ui-dropdown-content/i)) {
          selectedItem = item;
        }
      });
      return selectedItem;
    }
  }, {
    key: "hideContent",
    value: function hideContent(activeIndex) {
      var contents = document.querySelectorAll('.phpimenta-ui-dropdown-content');
      contents.forEach(function (content) {
        if (content.dataset.index != activeIndex) {
          content.style.display = 'none';
        }
      });
    }
  }]);

  return Dropdown;
}();

var dropdown = new Dropdown();
dropdown.enable();
//# sourceMappingURL=dropdown.js.map
