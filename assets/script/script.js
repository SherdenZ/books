let self = document.getElementById('write-yourself');

let load = document.getElementById('load-from-file');

let way = document.getElementById('way-to-add');

way.onclick = function(event) {
    let target = event.target;

    if (target.id == '') return;

    if (target.id == 'self') {
        show(self);
        hide(load);
    } else {
        show(load);
        hide(self);
    }
}

function hide(element) {
    element.className = 'hide';
}

function show (element) {
    element.className = 'show';
}