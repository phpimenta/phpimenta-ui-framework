class Dropdown {
  constructor() {
    this.previousContentId;
    this.currentContentId;
  }

  enable() {
    let self = this;
    window.addEventListener('click', function (event) {
      if (event.target.classList.value != 'phpimenta-ui-dropdown') {
        let contents = document.querySelectorAll('.phpimenta-ui-dropdown-content');

        contents.forEach(content => {
          document.getElementById(content.id).style.display = 'none';
        });
      }
    });

    let toggles = document.querySelectorAll('.dropdown-toggle');

    toggles.forEach(toggle => {
      toggle.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        let contentId = toggle.dataset.toggle;
        self.toggleContent(contentId);
        self.hideContent(contentId);
        this.previousContentId = contentId;
      });
    });
  }

  toggleContent(contentId) {
    let element = document.getElementById(contentId);
    let display = window.getComputedStyle(element).getPropertyValue('display');
    if (display == 'none') {
      document.getElementById(contentId).style.display = 'block';
      this.currentContentId = contentId;
    } else {
      document.getElementById(contentId).style.display = 'none';
    }
  }

  hideContent() {
    if (this.currentContentId != this.previousContentId && this.previousContentId != undefined) {
      document.getElementById(this.previousContentId).style.display = 'none';
    }
  }
}

let dropdown = new Dropdown();
dropdown.enable();