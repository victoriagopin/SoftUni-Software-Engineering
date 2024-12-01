const baseURL = 'http://localhost:3030/jsonstore/matches'

const loadBtn = document.getElementById("load-matches");
const listEl = document.getElementById('list');
const addMatchBtn = document.getElementById('add-match');
const hostInput = document.getElementById('host');
const scoreInput = document.getElementById('score');
const guestInput = document.getElementById('guest');
const editBtn = document.getElementById('edit-match');

loadBtn.addEventListener('click', onLoad);
addMatchBtn.addEventListener('click', onAdd);
editBtn.addEventListener('click', onEdit);

async function onLoad(){
    listEl.innerHTML = '';
    const res = await fetch(`${baseURL}`);
    const data = await res.json();

    const matches = Object.values(data);

    matches.forEach((match) => createElements(match));

}

function createElements(match){
   const pHost = document.createElement('p');
    pHost.textContent = match.host;

   const pResult = document.createElement('p');
    pResult.textContent = match.score;

   const pGuest = document.createElement('p');
   pGuest.textContent = match.guest;

   const divInfo = document.createElement('div');
   divInfo.classList.add('info');
   divInfo.appendChild(pHost);
   divInfo.appendChild(pResult);
   divInfo.appendChild(pGuest);

   const changeBtn = document.createElement('button');
   changeBtn.textContent = 'Change';
   changeBtn.classList.add('change-btn');

   changeBtn.addEventListener('click', () => {
    hostInput.value = match.host;
    scoreInput.value = match.score;
    guestInput.value = match.guest;

    addMatchBtn.setAttribute('disabled', 'disabled');
    editBtn.removeAttribute('disabled');
    editBtn.setAttribute('data-id', `${match._id}`);
    
   })

   const deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'Delete';
   deleteBtn.classList.add('delete-btn');

   deleteBtn.addEventListener('click', async () => {
    const id = match._id;
    
    const res = await fetch(`${baseURL}/${id}`, {
        method: 'DELETE'
    });

    onLoad();
   })

   const divBtns = document.createElement('div');
   divBtns.classList.add('btn-wrapper');

   divBtns.appendChild(changeBtn);
   divBtns.appendChild(deleteBtn);

   const liEl = document.createElement('li');
   liEl.classList.add('match');
   liEl.appendChild(divInfo);
   liEl.appendChild(divBtns);

   listEl.appendChild(liEl);
}

async function onAdd(){
    const host = hostInput.value;
    const score = scoreInput.value;
    const guest = guestInput.value;

    clearInputFields();

    const res = await fetch(baseURL,{
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({host, score, guest})
    })

    onLoad();
}

async function onEdit(){
    const host = hostInput.value;
    const score = scoreInput.value;
    const guest = guestInput.value;
    const id = editBtn.getAttribute('data-id');

    if(!host || !score || !guest){
        return;
    }

    clearInputFields();
    editBtn.setAttribute('disabled', 'disabled');
    editBtn.removeAttribute('data-id');
    addMatchBtn.removeAttribute('disabled');

    const res = await fetch(`${baseURL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({host, score, guest, _id : id})
    })

    onLoad();
    
}

function clearInputFields(){
    hostInput.value = '';
    scoreInput.value = '';
    guestInput.value = '';
}