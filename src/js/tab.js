class Tab {
    constructor() {
        this.hideTabContent();

        let tabs = document.querySelectorAll('.phpimenta-ui-tabs');

        var self = this;

        tabs.forEach(tab => {
            let items = Array.from(tab.children);
            items.forEach(item => {
                let link = item.children[0];
                let id = link.getAttribute('href');
                let tabContent = document.querySelector(id);
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

    removeActiveClassFromItems(items) {
        items.forEach(item => {
            item.classList.remove('active');
        });
    }

    hideTabContent(items) {
        if (items) {
            items.forEach(item => {
                let link = item.children[0];
                let id = link.getAttribute('href');
                document.querySelector(id).style.display = 'none';
            });
        } else {
            let tabContents = document.querySelectorAll('.phpimenta-ui-tab-content');
            tabContents.forEach(tabContent => {
                Array.from(tabContent.children).forEach(element => {
                    document.getElementById(element.id).style.display = 'none';
                });
            });
        }
    }
}

new Tab();