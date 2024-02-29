document.addEventListener('DOMContentLoaded', attachEvents);
let select = document.getElementById('posts');
let ul = document.getElementById('post-comments');



function attachEvents() {
    let loadBtn = document.getElementById('btnLoadPosts');
    loadBtn.addEventListener('click', createPosts);
    let viewBtn = document.getElementById('btnViewPost');
    viewBtn.addEventListener('click', view);

}

async function createPosts() {
    let urlPosts = 'http://localhost:3030/jsonstore/blog/posts';

    let response = await fetch(urlPosts);
    let data = await response.json();
    let values = Object.values(data);


    for (let el of values) {
        createOption(el);
    }
}

function createOption(obj) {


    let option = document.createElement('option');
    option.value = obj.id;
    option.textContent = obj.title;

    select.appendChild(option);
}

async function view() {
    let value = select.value;

    let urlPosts = 'http://localhost:3030/jsonstore/blog/posts/';
    let response = await fetch(urlPosts + value);
    let data = await response.json();

    let urlComments = 'http://localhost:3030/jsonstore/blog/comments'

    let responseComm = await fetch(urlComments);
    let dataComm = await responseComm.json();


    let filteredComments = Object.values(dataComm).filter(x => x.postId == value);
    ul.innerHTML = '';
    createSection(data, filteredComments);

}

function createSection(obj, filteredComments) {
    let h1 = document.getElementById('post-title');
    h1.textContent = obj.title;
    let p = document.getElementById('post-body');
    p.textContent = obj.body;



    filteredComments.forEach(el => {
        let li = document.createElement('li');
        li.id = el.id;
        li.textContent = el.text;
        ul.appendChild(li);
    })
}

attachEvents();