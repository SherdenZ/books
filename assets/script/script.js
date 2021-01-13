let self = document.getElementById('write-yourself');

let load = document.getElementById('load-from-file');

let way = document.getElementById('way-to-add');

let loadBookDescriptrion = document.getElementById('load-book-description');

let loadBookName = document.getElementById('load-book-name');

let writeBookName = document.getElementById('write-book-name');

let writeBookDescription = document.getElementById('write-book-description');

let writeAndSave = document.getElementById('write-and-save');
writeAndSave.addEventListener('click', saveWritten);
let loadAndSave = document.getElementById('load-and-save');
loadAndSave.addEventListener('click', saveLoaded);

let resultBlock = document.querySelector('.result');

const requestUrl = 'https://apiinterns.osora.ru/';

way.onclick = function(event) {
    let target = event.target;

    resultBlock.innerHTML = '';

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

function saveWritten() {
    let book = {name: writeBookName.value, description: writeBookDescription.value};
    localStorage.setItem('book' + (localStorage.length - 2), book);
    resultBlock.innerHTML = 'Книга успешно сохранена';
    event.preventDefault();
    hide(self);
    clear(self);
}

function saveLoaded() {
    resultBlock.innerHTML = '';
    let login = loadBookName.value;
    let file = loadBookDescriptrion.files[0];

    if (file.type !== 'text/plain') {
        resultBlock.innerHTML = 'Загружать только .txt файлы';
        event.preventDefault();
        return
    }

    let formData = new FormData();
    formData.append('file', file); /* в ''для распознавания сервером */
    formData.append('login', login);
   
    /* let file = new Blob([formData], {type: 'application/binary'});  --- отправлять именно FormData, а не blob
    
    let body = {   ---- не нужно, все данные записал в FormData
    login: login,
    file: file
    }; */

    sendRequest(formData);



    event.preventDefault(); /* нужна чтоб страница не перезагружалась */
    resultBlock.innerHTML = 'Книга успешно сохранена.';
    hide(load);
    clear(load);
}




function sendRequest (body) {
    console.log('try')
    fetch(requestUrl, {
        method: 'POST',
        body: body
    })
    /* .then(response => response.json()) */
    .then( response => { 
        answer = response.json();
        console.log(answer);
    })
}

function clear(element) {
    element.children[0].value = '';
    element.children[1].value = '';
}