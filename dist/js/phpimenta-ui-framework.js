/*!
* Phpimenta UI Framework v0.2.6
* Copyright 2020-2020 Phpimenta Software e Consultoria
* Licensed under MIT (https://github.com/phpimenta/phpimenta-ui-framework/blob/master/LICENSE)
*/
"use strict";
//# sourceMappingURL=header.js.map

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

"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Datepicker = /*#__PURE__*/function () {
  function Datepicker() {
    _classCallCheck(this, Datepicker);

    this.months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    this.weekdays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
    this.date = new Date();
    this.currentDay = this.date.getDate();
    this.currentYear = this.date.getFullYear();
    this.currentMonth = this.date.getMonth();
    this.dateFormat = 'dd-mm-yyyy';
    this._currentInput;
  }

  _createClass(Datepicker, [{
    key: "enable",
    value: function enable() {
      this.listener();
    }
  }, {
    key: "listener",
    value: function listener() {
      var self = this;

      function listenerFunction(event) {
        event.stopImmediatePropagation();
        var classList = event.target.classList;

        if (classList.toString().match(/phpimenta-ui-datepicker-modal/i)) {
          self.close();
        } else if (classList.toString().match(/phpimenta-ui-datepicker-link/i)) {
          var day = event.target.innerHTML;
          var date = self.convertDate(self.currentYear, self.currentMonth + 1, day);
          var input = document.querySelector(self._currentInput);

          if (input.value != undefined) {
            input.value = date;
          } else if (input.innerHTML != undefined) {
            input.innerHTML = date;
          }

          self.close();
        } else if (classList.toString().match(/phpimenta-ui-datepicker-year-increase-button/i)) {
          self.currentYear = self.currentYear + 1;
          self.create(self._currentInput);
        } else if (classList.toString().match(/phpimenta-ui-datepicker-year-decrease-button/i)) {
          self.currentYear = self.currentYear - 1;
          self.create(self._currentInput);
        } else if (classList.toString().match(/phpimenta-ui-datepicker-month-decrease-button/i)) {
          self.currentMonth = self.currentMonth - 1;

          if (self.currentMonth == -1) {
            self.currentMonth = 11;
            self.currentYear = self.currentYear - 1;
          }

          self.create(self._currentInput);
        } else if (classList.toString().match(/phpimenta-ui-datepicker-month-increase-button/i)) {
          self.currentMonth = self.currentMonth + 1;

          if (self.currentMonth == 12) {
            self.currentMonth = 0;
            self.currentYear = self.currentYear + 1;
          }

          self.create(self._currentInput);
        }
      }

      window.removeEventListener('click', listenerFunction);
      window.addEventListener('click', listenerFunction);
    }
  }, {
    key: "convertDate",
    value: function convertDate(year, month, day) {
      month = month.toString().padStart(2, '0');
      day = day.toString().padStart(2, '0');

      if (this.dateFormat == 'dd-mm-yyyy') {
        return day + '/' + month + '/' + year;
      } else if (this.dateFormat == 'yyyy-mm-dd') {
        return year + '/' + month + '/' + day;
      }
    }
  }, {
    key: "create",
    value: function create(input) {
      this._currentInput = input;
      this.close();
      this.createGUI();
    }
  }, {
    key: "close",
    value: function close() {
      var modals = document.querySelectorAll('.phpimenta-ui-datepicker-modal');
      modals.forEach(function (modal) {
        modal.remove();
      });
    }
  }, {
    key: "daysInMonth",
    value: function daysInMonth(year, month) {
      month = month + 1;
      return new Date(year, month, 0).getDate();
    }
  }, {
    key: "weekday",
    value: function weekday(year, month, day) {
      return new Date(year, month, day).getDay();
    }
  }, {
    key: "createGUI",
    value: function createGUI() {
      var modalContent = document.createElement('div');
      modalContent.className = 'phpimenta-ui-datepicker-modal-content';
      var table = document.createElement('table');
      table.classList = 'phpimenta-ui-table';
      var caption = document.createElement('caption');
      var divMonth = document.createElement('div');
      divMonth.classList = 'header-month';
      var decreaseMonthButton = document.createElement('button');
      decreaseMonthButton.innerHTML = '&lsaquo;';
      decreaseMonthButton.classList = 'phpimenta-ui-datepicker-month-decrease-button';
      divMonth.appendChild(decreaseMonthButton);
      var spanMonth = document.createElement('span');
      spanMonth.innerHTML = this.months[this.currentMonth];
      divMonth.appendChild(spanMonth);
      var increaseMonthButton = document.createElement('button');
      increaseMonthButton.innerHTML = '&rsaquo;';
      increaseMonthButton.classList = 'phpimenta-ui-datepicker-month-increase-button';
      divMonth.appendChild(increaseMonthButton);
      caption.appendChild(divMonth);
      var divYear = document.createElement('div');
      var decreaseButton = document.createElement('button');
      decreaseButton.innerHTML = '&lsaquo;';
      decreaseButton.classList = 'phpimenta-ui-datepicker-year-decrease-button';
      divYear.appendChild(decreaseButton);
      var spanYear = document.createElement('span');
      spanYear.innerHTML = this.currentYear;
      divYear.appendChild(spanYear);
      var increaseButton = document.createElement('button');
      increaseButton.classList = 'phpimenta-ui-datepicker-year-increase-button';
      increaseButton.innerHTML = '&rsaquo;';
      divYear.appendChild(increaseButton);
      divYear.classList = 'header-year';
      caption.appendChild(divYear);
      table.appendChild(caption);
      var thead = document.createElement('thead');
      var tr = document.createElement('tr');

      for (var w = 0; w <= 6; w++) {
        var th = document.createElement('th');
        th.innerHTML = this.weekdays[w];
        tr.appendChild(th);
      }

      thead.appendChild(tr);
      table.appendChild(thead);
      var tbody = document.createElement('tbody');
      var counter = 0;
      var trBody,
          firstDayAdded = false;
      var totalDaysInMonth = this.daysInMonth(this.currentYear, this.currentMonth);

      for (var d = 1; d <= totalDaysInMonth; d++) {
        if (counter == 0) {
          trBody = document.createElement('tr');
        }

        if (firstDayAdded == false) {
          if (this.weekday(this.currentYear, this.currentMonth, 1) == counter) {
            firstDayAdded = true;
            d = 1;
            var td = document.createElement('td');
            td.classList = 'phpimenta-ui-datepicker-link';

            if (this.currentDay == 1) {
              td.classList = 'current-date phpimenta-ui-datepicker-link';
            }

            td.innerHTML = '01';
            trBody.appendChild(td);
            tbody.appendChild(trBody);
          } else {
            var _td = document.createElement('td');

            trBody.appendChild(_td);
            tbody.appendChild(trBody);
          }
        } else {
          var _td2 = document.createElement('td');

          _td2.classList = 'phpimenta-ui-datepicker-link';

          if (this.currentDay == d) {
            _td2.classList = 'current-date phpimenta-ui-datepicker-link';
          }

          _td2.innerHTML = d.toString().padStart(2, '0');
          trBody.appendChild(_td2);
          tbody.appendChild(trBody);
        }

        if (counter == 6) {
          counter = 0;
        } else {
          counter++;
        }
      }

      table.appendChild(tbody);
      modalContent.appendChild(table);
      var modal = document.createElement('div');
      modal.classList = 'phpimenta-ui-datepicker-modal';
      modal.appendChild(modalContent);
      document.querySelector('body').appendChild(modal);
    }
  }]);

  return Datepicker;
}();

var datepicker = new Datepicker();
datepicker.enable();

window.phpimenta_datepicker = function (input) {
  datepicker.create(input);
};
//# sourceMappingURL=datepicker.js.map
