/**
 * --------------------------------------------------------------------------
 * Phpimenta UI Framework (v0.1.8)
 * Copyright 2020-2020 Phpimenta Software e Consultoria
 * Licensed under MIT (https://github.com/phpimenta/phpimenta-ui-framework/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

window.addEventListener('load', function () {
  let cards = document.querySelectorAll(
    ".phpimenta-ui-card-collapse .phpimenta-ui-card"
  );
  let header;
  let body;
  cards.forEach(card => {
    Array.from(card.children).forEach(element => {
      if (element.classList.value.match(/phpimenta-ui-card-header/i)) {
        header = element;
      } else if (element.classList.value.match(/phpimenta-ui-card-body/i)) {
        body = element;
      }
    });
    header.addEventListener("click", function (event) {
      card.classList.toggle("show");
    });
  });
});

let files = document.querySelectorAll('.phpimenta-ui-upload input[type=file]');

files.forEach(file => {
  file.addEventListener('change', function (event) {
    let files = [];
    Array.from(this.files).forEach(file => {
      files.push(' ' + file.name);
    });
    let label;
    Array.from(this.parentElement.children).forEach(node => {
      if (node.nodeName == "LABEL") {
        label = node;
      }
    });
    label.innerHTML = files.toString();
  });
});

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

class Datepicker {
  constructor() {
    this.months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ];
    this.weekdays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
    this.date = new Date();
    this.currentDay = this.date.getDate();
    this.currentYear = this.date.getFullYear();
    this.currentMonth = this.date.getMonth();
    this.dateFormat = 'dd-mm-yyyy';
    this._currentInput;
  }

  enable() {
    this.listener();
  }

  listener() {
    let self = this;

    function listenerFunction(event) {
      event.stopImmediatePropagation();
      let classList = event.target.classList;
      if (classList.toString().match(/phpimenta-ui-datepicker-modal/i)) {
        self.close();
      } else if (classList.toString().match(/phpimenta-ui-datepicker-link/i)) {
        let day = event.target.innerHTML;
        let date = self.convertDate(self.currentYear, (self.currentMonth + 1), day);
        let input = document.querySelector(self._currentInput);
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

  convertDate(year, month, day) {
    month = month.toString().padStart(2, '0');
    day = day.toString().padStart(2, '0');
    if (this.dateFormat == 'dd-mm-yyyy') {
      return day + '/' + month + '/' + year;
    } else if (this.dateFormat == 'yyyy-mm-dd') {
      return year + '/' + month + '/' + day;
    }
  }

  create(input) {
    this._currentInput = input;
    this.close();
    this.createGUI();
  }

  close() {
    let modals = document.querySelectorAll('.phpimenta-ui-datepicker-modal');
    modals.forEach(modal => {
      modal.remove();
    });
  }

  daysInMonth(year, month) {
    month = month + 1;
    return new Date(year, month, 0).getDate();
  }

  weekday(year, month, day) {
    return new Date(year, month, day).getDay();
  }


  createGUI() {
    let modalContent = document.createElement('div');
    modalContent.className = 'phpimenta-ui-datepicker-modal-content';
    let table = document.createElement('table');
    table.classList = 'phpimenta-ui-table';

    let caption = document.createElement('caption');
    let divMonth = document.createElement('div');
    divMonth.classList = 'header-month';
    let decreaseMonthButton = document.createElement('button');
    decreaseMonthButton.innerHTML = '&lsaquo;';
    decreaseMonthButton.classList =
      'phpimenta-ui-datepicker-month-decrease-button';
    divMonth.appendChild(decreaseMonthButton);
    let spanMonth = document.createElement('span');
    spanMonth.innerHTML = this.months[this.currentMonth];
    divMonth.appendChild(spanMonth);
    var increaseMonthButton = document.createElement('button');
    increaseMonthButton.innerHTML = '&rsaquo;';
    increaseMonthButton.classList =
      'phpimenta-ui-datepicker-month-increase-button';
    divMonth.appendChild(increaseMonthButton);
    caption.appendChild(divMonth);

    let divYear = document.createElement('div');
    var decreaseButton = document.createElement('button');
    decreaseButton.innerHTML = '&lsaquo;';
    decreaseButton.classList = 'phpimenta-ui-datepicker-year-decrease-button';
    divYear.appendChild(decreaseButton);
    let spanYear = document.createElement('span');
    spanYear.innerHTML = this.currentYear;
    divYear.appendChild(spanYear);
    var increaseButton = document.createElement('button');
    increaseButton.classList = 'phpimenta-ui-datepicker-year-increase-button';
    increaseButton.innerHTML = '&rsaquo;';
    divYear.appendChild(increaseButton);
    divYear.classList = 'header-year';
    caption.appendChild(divYear);
    table.appendChild(caption);

    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    for (let w = 0; w <= 6; w++) {
      let th = document.createElement('th');
      th.innerHTML = this.weekdays[w];
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);

    let tbody = document.createElement('tbody');
    let counter = 0;
    let trBody,
      firstDayAdded = false;
    let totalDaysInMonth = this.daysInMonth(
      this.currentYear,
      this.currentMonth
    );
    for (let d = 1; d <= totalDaysInMonth; d++) {
      if (counter == 0) {
        trBody = document.createElement('tr');
      }

      if (firstDayAdded == false) {
        if (this.weekday(this.currentYear, this.currentMonth, 1) == counter) {
          firstDayAdded = true;
          d = 1;
          let td = document.createElement('td');
          td.classList = 'phpimenta-ui-datepicker-link';
          if (this.currentDay == 1) {
            td.classList = 'current-date phpimenta-ui-datepicker-link';
          }
          td.innerHTML = '01';
          trBody.appendChild(td);
          tbody.appendChild(trBody);
        } else {
          let td = document.createElement('td');
          trBody.appendChild(td);
          tbody.appendChild(trBody);
        }
      } else {
        let td = document.createElement('td');
        td.classList = 'phpimenta-ui-datepicker-link';
        if (this.currentDay == d) {
          td.classList = 'current-date phpimenta-ui-datepicker-link';
        }
        td.innerHTML = d.toString().padStart(2, '0');
        trBody.appendChild(td);
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
    let modal = document.createElement('div');
    modal.classList = 'phpimenta-ui-datepicker-modal';
    modal.appendChild(modalContent);

    document.querySelector('body').appendChild(modal);
  }
}

let datepicker = new Datepicker();
datepicker.enable();

window.phpimenta_datepicker = function (input) {
  datepicker.create(input);
}
