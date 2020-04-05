class Dropdown {
  constructor() {
    this.counter = 0;
  }

  enable() {
    let self = this;
    window.addEventListener('click', function (event) {
      if (event.target.classList.value.split(' ').indexOf('dropdown-toggle') == -1) {
        self.hideContent();
      }
    });
    
    let dropdowns = document.querySelectorAll('.phpimenta-ui-dropdown');

    dropdowns.forEach(dropdown => {
      Array.from(dropdown.children).forEach(children => {
        if(children.classList.toString().split('dropdown-toggle')) {
          children.addEventListener('click', function(event){
            event.preventDefault();
            self.hideContent(event.target.dataset.index);
            let content = self.getContent(event.target);
            let display = window.getComputedStyle(content).getPropertyValue('display');

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

  getContent(target) {
    let dropdown = Array.from(target.parentElement.children);
    let selectedItem = null;
    dropdown.forEach(item => {
      if (item.classList.toString().match(/phpimenta-ui-dropdown-content/i)) {
        selectedItem = item;
      }
    });
    return selectedItem;
  }

  hideContent(activeIndex) {
    let contents = document.querySelectorAll('.phpimenta-ui-dropdown-content');
    contents.forEach(content => {
      if ( content.dataset.index != activeIndex) {
        content.style.display = 'none';
      }
    });
  }
}

let dropdown = new Dropdown();
dropdown.enable();