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