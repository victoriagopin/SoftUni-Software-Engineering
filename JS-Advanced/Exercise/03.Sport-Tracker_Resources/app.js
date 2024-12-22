const baseURL = 'http://localhost:3030/jsonstore/workout/';

const loadBtn = document.getElementById('load-workout');
const listEl = document.getElementById('list');
const addBtn = document.getElementById('add-workout');
const workoutInput = document.getElementById('workout');
const locationInput = document.getElementById('location');
const dateInput = document.getElementById('date');
const formElement = document.querySelector('#form form');
const editBtn = document.getElementById('edit-workout');

loadBtn.addEventListener('click', onLoad);
addBtn.addEventListener('click', onAdd);
editBtn.addEventListener('click', onEdit);

async function onLoad(){
    listEl.innerHTML = '';
    const res = await fetch(`${baseURL}`);
    const data = await res.json();

    const workouts = Object.values(data);

    const workoutElements = workouts.map(workout => createElements(workout.workout, workout.location, workout.date, workout._id));
    listEl.append(...workoutElements);
}

function createElements(workout, location, date, id){
    const h2 = document.createElement('h2');
    h2.textContent = workout;
    const h3 = document.createElement('h3');
    h3.textContent = date;
    const h3Loc = document.createElement('h3');
    h3Loc.textContent = location;
    h3Loc.id = 'location'

    const changeBtn = document.createElement('button');
    changeBtn.textContent = 'Change';
    changeBtn.classList.add('change-btn');
    changeBtn.addEventListener('click', () => {
        workoutInput.value = workout;
        locationInput.value = location;
        dateInput.value = date;

        container.remove();

        editBtn.removeAttribute('disabled');
        addBtn.setAttribute('disabled', 'disabled');
        formElement.setAttribute('data-workout-id', id);
    })

    const deleteBtn  =document.createElement('button');
    deleteBtn.textContent = 'Done';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', async () => {
        await fetch(`${baseURL}/${id}`, {
            method: 'DELETE'
        });
    
        container.remove(); 
        await onLoad();
    })

    const btnContainer = document.createElement('div');
    btnContainer.id = 'buttons-container';
    btnContainer.appendChild(changeBtn);
    btnContainer.appendChild(deleteBtn);

    const container = document.createElement('div');
    container.classList.add('container');
    container.appendChild(h2);
    container.appendChild(h3);
    container.appendChild(h3Loc);
    container.appendChild(btnContainer);

    return container;
}

async function onAdd(){
    const workout = workoutInput.value;
    const location = locationInput.value;
    const date = dateInput.value;

    clearInputFields();

    const res = await fetch(baseURL,{
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({workout, location, date})
    })

    await onLoad();
    
}

async function onEdit(){
    const workoutId = formElement.getAttribute('data-workout-id');

    const workout = workoutInput.value;
    const location = locationInput.value;
    const date = dateInput.value;

    clearInputFields();


    await fetch(`${baseURL}/${workoutId}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({workout, location, date})
    })

    await onLoad();

    editBtn.setAttribute('disabled', 'disabled');

    addBtn.removeAttribute('disabled');

    formElement.removeAttribute('data-workout-id');
}

function clearInputFields(){
    workoutInput.value = '';
    locationInput.value = '';
    dateInput.value = '';
}