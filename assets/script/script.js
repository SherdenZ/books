let self = document.getElementById('write-yourself');

let load = document.getElementById('load-from-file');

let way = document.getElementById('way-to-add');

let loadBookDescriptrion = document.getElementById('load-book-description');

let loadBookName = document.getElementById('load-book-name');

let writeAndSave = document.getElementById('write-and-save');
writeAndSave.addEventListener('click', saveWritten);
let loadAndSave = document.getElementById('load-and-save');
loadAndSave.addEventListener('click', saveLoaded);

const requestUrl = 'https://apiinterns.osora.ru/';

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

function saveWritten() {
    alert('written');
}

function saveLoaded() {
    let login = loadBookName.value;

    let formData = new FormData();
    formData.append('book[]', loadBookDescriptrion.files[0]);
    formData.append('book[]', login);
   
    let file = new Blob([formData],/*  {type: 'application/binary'} */);
    

    let body = {
    login: login,
    file: file
    };

    sendRequest(body);
    event.preventDefault();
}




function sendRequest (body) {
    console.log('try')
    fetch(requestUrl, {
        method: 'POST',
        body: body
    })
    /* .then(response => response.json()) */
    .then( response => { 
        console.log('Пошло');
        console.log(response )})
}
