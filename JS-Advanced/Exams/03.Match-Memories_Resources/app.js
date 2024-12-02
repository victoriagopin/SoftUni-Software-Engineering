const baseURL = 'http://localhost:3030/jsonstore/matches'

const loadBtn = document.getElementById("load-matches");
const listEl = document.getElementById('list');
const addMatchBtn = document.getElementById('add-match');
const hostInput = document.getElementById('host');
const scoreInput = document.getElementById('score');
const guestInput = document.getElementById('guest');
const editBtn = document.getElementById('edit-match');
const formElement = document.querySelector('#form form');

loadBtn.addEventListener('click', onLoad);
addMatchBtn.addEventListener('click', onAdd);
editBtn.addEventListener('click', onEdit);

async function onLoad(){
    listEl.innerHTML = '';
    const res = await fetch(`${baseURL}`);
    const data = await res.json();

    const matches = Object.values(data);

    const matchElements = matches.map(match => createElements(match.host, match.score, match.guest, match._id));
    listEl.append(...matchElements);
}

function createElements(host, score, guest, matchId){
   const pHost = document.createElement('p');
    pHost.textContent = host;

   const pResult = document.createElement('p');
    pResult.textContent = score;

   const pGuest = document.createElement('p');
   pGuest.textContent = guest;

   const divInfo = document.createElement('div');
   divInfo.classList.add('info');
   divInfo.appendChild(pHost);
   divInfo.appendChild(pResult);
   divInfo.appendChild(pGuest);

   const changeBtn = document.createElement('button');
   changeBtn.textContent = 'Change';
   changeBtn.classList.add('change-btn');

   changeBtn.addEventListener('click', () => {
    hostInput.value = host;
    scoreInput.value = score;
    guestInput.value = guest;

    editBtn.removeAttribute('disabled');
    addMatchBtn.setAttribute('disabled', 'disabled');
    formElement.setAttribute('data-match-id', matchId);
   })

   const deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'Delete';
   deleteBtn.classList.add('delete-btn');

   deleteBtn.addEventListener('click', async () => {
    
     await fetch(`${baseURL}/${matchId}`, {
        method: 'DELETE'
    });

   await onLoad();
   })

   const divBtns = document.createElement('div');
   divBtns.classList.add('btn-wrapper');

   divBtns.appendChild(changeBtn);
   divBtns.appendChild(deleteBtn);

   const liEl = document.createElement('li');
   liEl.classList.add('match');
   liEl.appendChild(divInfo);
   liEl.appendChild(divBtns);

   return liEl;
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

    await onLoad();
}

async function onEdit(e){
    e.preventDefault();
    const matchId = formElement.getAttribute('data-match-id');

    const host = hostInput.value;
    const score = scoreInput.value;
    const guest = guestInput.value;
    
    clearInputFields();

    await fetch(`${baseURL}/${matchId}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({host, score, guest, _id : matchId})
    })

    await onLoad();

    editBtn.setAttribute('disabled', 'disabled');

    addMatchBtn.removeAttribute('disabled');

    formElement.removeAttribute('data-match-id');
    
    
}

function clearInputFields(){
    hostInput.value = '';
    scoreInput.value = '';
    guestInput.value = '';
}