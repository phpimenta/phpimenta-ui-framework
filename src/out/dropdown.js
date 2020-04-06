"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dropdown = /*#__PURE__*/function () {
  function Dropdown() {
    _classCallCheck(this, Dropdown);

    this.previousContentId;
    this.currentContentId;
  }

  _createClass(Dropdown, [{
    key: "enable",
    value: function enable() {
      var _this = this;

      var self = this;
      window.addEventListener('click', function (event) {
        if (event.target.classList.value != 'phpimenta-ui-dropdown') {
          var contents = document.querySelectorAll('.phpimenta-ui-dropdown-content');
          contents.forEach(function (content) {
            document.getElementById(content.id).style.display = 'none';
          });
        }
      });
      var toggles = document.querySelectorAll('.dropdown-toggle');
      toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (event) {
          event.preventDefault();
          event.stopPropagation();
          var contentId = toggle.dataset.toggle;
          self.toggleContent(contentId);
          self.hideContent(contentId);
          _this.previousContentId = contentId;
        });
      });
    }
  }, {
    key: "toggleContent",
    value: function toggleContent(contentId) {
      var element = document.getElementById(contentId);
      var display = window.getComputedStyle(element).getPropertyValue('display');

      if (display == 'none') {
        document.getElementById(contentId).style.display = 'block';
        this.currentContentId = contentId;
      } else {
        document.getElementById(contentId).style.display = 'none';
      }
    }
  }, {
    key: "hideContent",
    value: function hideContent() {
      if (this.currentContentId != this.previousContentId && this.previousContentId != undefined) {
        document.getElementById(this.previousContentId).style.display = 'none';
      }
    }
  }]);

  return Dropdown;
}();

var dropdown = new Dropdown();
dropdown.enable();
//# sourceMappingURL=dropdown.js.map
