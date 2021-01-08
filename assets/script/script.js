let name = document.getElementById('name');

let self = document.getElementById('self');

let load = document.getElementById('load');

let form = document.querySelector('form');

form.onclick = function(event) {
    let target = event.target;

    if (target.id == '') return;

    clear(name);

    let bookName = document.createElement('input');
    bookName.className = 'book-name';
    bookName.type = 'text';
    name.append(bookName);

    if (target.id == 'self') {
        let newTextarea = document.createElement('textarea');
        newTextarea.cols = 30;
        newTextarea.rows = 5;
        newTextarea.placeholder = 'Текст...';
        newTextarea.className = 'description-book';
        name.append(newTextarea);
    } else if(target.id == 'load') {
        let load = document.createElement('input');
        load.type = 'file';
        load.className = 'load-file';
        name.append(load);
    };
}


function clear(element) {
    element.innerHTML = "";
}