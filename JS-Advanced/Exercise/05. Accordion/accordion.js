document.addEventListener('load', solution());

async function solution() {

    let url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    let response = await fetch(url);
    let data = await response.json();

    for (let el of data) {

        createArticle(el);
    }
}

async function createArticle(obj) {

    let main = document.getElementById('main');
    let divAcc = document.createElement('div');
    divAcc.classList.add('accordion');
    let divHead = document.createElement('div');
    divHead.classList.add('head');
    let span = document.createElement('span');
    span.textContent = obj.title;
    let buton = document.createElement('button');
    buton.addEventListener('click', showMore);
    buton.classList.add('button');
    buton.id = obj._id;
    buton.textContent = 'More';
    divHead.appendChild(span);
    divHead.appendChild(buton);
    let divExtra = document.createElement('div');
    divExtra.classList.add('extra');
    divExtra.style.display = 'none';
    let p = document.createElement('p');
    divExtra.appendChild(p);
    divAcc.appendChild(divHead);
    divAcc.appendChild(divExtra);
    main.appendChild(divAcc);

}

async function showMore(event) {
    let article = event.target.parentElement.parentElement;
    let button = article.querySelector('.button');
    let id = button.id;
    let articleUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/';
    let response = await fetch(articleUrl + id);
    let data = await response.json();

    if (button.textContent == 'More') {
        let divExtra = article.querySelector('.extra');

        divExtra.style.display = 'block';
        let p = article.querySelector('div.extra p');
        p.textContent = data.content;
        let btn = article.querySelector('.button');
        btn.textContent = 'Less';
    } else {
        let divExtra = article.querySelector('.extra');

        divExtra.style.display = 'none';
        let p = article.querySelector('div.extra p');
        p.textContent = ''
        let btn = article.querySelector('.button');
        btn.textContent = 'More';
    }
}