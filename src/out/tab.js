"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tab = /*#__PURE__*/function () {
  function Tab() {
    _classCallCheck(this, Tab);

    this.hideTabContent();
    var tabs = document.querySelectorAll('.phpimenta-ui-tabs');
    var self = this;
    tabs.forEach(function (tab) {
      var items = Array.from(tab.children);
      items.forEach(function (item) {
        var link = item.children[0];
        var id = link.getAttribute('href');
        var tabContent = document.querySelector(id);
        link.addEventListener('click', function (event) {
          event.preventDefault();
          self.removeActiveClassFromItems(items);
          self.hideTabContent(items);
          item.classList.add('active');
          tabContent.style.display = 'block';
        });

        if (item.classList.toString().match(/active/i)) {
          tabContent.style.display = 'block';
        }
      });
    });
  }

  _createClass(Tab, [{
    key: "removeActiveClassFromItems",
    value: function removeActiveClassFromItems(items) {
      items.forEach(function (item) {
        item.classList.remove('active');
      });
    }
  }, {
    key: "hideTabContent",
    value: function hideTabContent(items) {
      if (items) {
        items.forEach(function (item) {
          var link = item.children[0];
          var id = link.getAttribute('href');
          document.querySelector(id).style.display = 'none';
        });
      } else {
        var tabContents = document.querySelectorAll('.phpimenta-ui-tab-content');
        tabContents.forEach(function (tabContent) {
          Array.from(tabContent.children).forEach(function (element) {
            document.getElementById(element.id).style.display = 'none';
          });
        });
      }
    }
  }]);

  return Tab;
}();

new Tab();
//# sourceMappingURL=tab.js.map
