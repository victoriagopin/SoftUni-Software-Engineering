function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', onLoad);
    const createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', onCreate);

}

async function onCreate() {
    let nameRef = document.getElementById('person');
    let phoneRef = document.getElementById('phone');
    const url = 'http://localhost:3030/jsonstore/phonebook';

    let name = nameRef.value;
    let phone = phoneRef.value;

    if (!nameRef.value || !phoneRef.value) {
        return;
    }

    let option = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ person: name, phone })
    }

    let data = await fetch(url, option);
    await onLoad();
    nameRef.value = '';
    phoneRef.value = '';

}

async function onLoad() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const ul = document.getElementById('phonebook');
    ul.innerHTML = '';
    let response = await fetch(url);
    let data = await response.json();

    let dataNeeded = Object.values(data);

    dataNeeded.forEach(obj => {
        let li = document.createElement('li');
        li.id = obj._id;
        li.textContent = `${obj.person}: ${obj.phone}`;
        li.innerHTML += `<button onclick="onDelete(event)">Delete</button>`
        ul.appendChild(li);

    })
}

async function onDelete(event) {
    const deleteURL = 'http://localhost:3030/jsonstore/phonebook/';
    let toDeleteEl = event.target.parentElement;
    let id = toDeleteEl.id;

    let res = await fetch(deleteURL + id, { method: "DELETE" });
    let data = await res.json();

    const ul = document.getElementById('phonebook');
    ul.innerHTML = '';
    onLoad();
}

attachEvents();