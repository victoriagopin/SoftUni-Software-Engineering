document.getElementById('loadBooks').addEventListener('click', onLoad);
const url = 'http://localhost:3030/jsonstore/collections/books';
document.querySelector('form button').addEventListener('click', onSubmit);

async function onSubmit(event) {
    event.preventDefault();

    if (event.target.textContent == "Submit") {
        let form = document.querySelector('form');
        let formData = new FormData(form);

        let title = formData.get('title');
        let author = formData.get('author');

        if (!title || !author) {
            return;
        }

        let data = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ author, title })
        }

        await fetch(url, data);
        await onLoad();
        form.reset();
    } else {
        let form = document.querySelector('form');
        let h3 = form.querySelector('h3');
        h3.textContent = 'FORM';
        let btn = form.querySelector('button');
        btn.textContent = 'Submit';

        let [titleRef, authorRef] = form.querySelectorAll('input');

        title = titleRef.value;
        author = authorRef.value;

        let id = event.target.id;


        let req = {
            method: "PUT",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ title, author })
        }

        await fetch(url + "/" + id, req);
        await onLoad();
    }

}

async function onLoad() {
    let form = document.querySelector('form');
    form.reset();
    let response = await fetch(url);
    let data = await response.json();
    let values = Object.entries(data);

    let table = document.querySelector('tbody');
    table.innerHTML = '';

    for (let [id, obj] of values) {

        let tr = document.createElement('tr');
        tr.id = id;
        let tdTitle = document.createElement('td');
        tdTitle.textContent = `${obj.title}`;
        tr.appendChild(tdTitle);

        let tdAuthor = document.createElement('td');
        tdAuthor.textContent = `${obj.author}`;
        tr.appendChild(tdAuthor);

        let tdBtns = document.createElement('td');
        let editBtn = document.createElement('button');
        editBtn.addEventListener('click', onEdit);
        editBtn.textContent = 'Edit';
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', onDelete);
        tdBtns.appendChild(editBtn);
        tdBtns.appendChild(deleteBtn);
        tr.appendChild(tdBtns);

        table.appendChild(tr);
    }
}

async function onDelete(event) {
    let curEl = event.target.parentElement.parentElement;
    let id = curEl.id;

    await fetch(url + '/' + id, { method: "DELETE" });
    await onLoad();
}

async function onEdit(event) {
    let curEl = event.target.parentElement.parentElement;
    let id = curEl.id;

    let res = await fetch(url + '/' + id);
    let data = await res.json();

    let form = document.querySelector('form');

    let [title, author] = form.querySelectorAll('input');
    title.value = data.title;
    author.value = data.author;

    let h3 = form.querySelector('h3');
    h3.textContent = 'Edit FORM';

    let btn = form.querySelector('button');
    btn.textContent = 'Save';
    btn.id = id;

}
