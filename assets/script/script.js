let self = document.getElementById('write-yourself');

let load = document.getElementById('load-from-file');

let way = document.getElementById('way-to-add');

let loadBookDescriptrion = document.getElementById('load-book-description');

let loadBookName = document.getElementById('load-book-name');

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
};

function hide(element) {
    element.className = 'hide';
};

function show (element) {
    element.className = 'show';
};

let requestUrl = 'https://apiinterns.osora.ru/';

let body = {
    login: loadBookName.value,
    file: loadBookDescriptrion.value
}

function sendRequest (method, url, body = null) {
    return fetch(url, {
        method: 'POST',
        body: body
    }).then( response => {
        return response.text();
    })
}

/* sendRequest('POST', requestUrl, body)
    .then(data => console.log(data)); */
