document.addEventListener('DOMContentLoaded', showTable);

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', onSubmit);
const url = 'http://localhost:3030/jsonstore/collections/students';

async function showTable() {
    let response = await fetch(url);
    let data = await response.json();
    let values = Object.values(data);
    let table = document.querySelector('tbody');
    table.innerHTML = '';

    for (let el of values) {
        let tr = document.createElement('tr');
        let tdFirstName = document.createElement('td');
        tdFirstName.textContent = `${el.firstName}`;
        tr.appendChild(tdFirstName);
        let tdLastName = document.createElement('td');
        tdLastName.textContent = `${el.lastName}`;
        tr.appendChild(tdLastName);
        let tdFacNum = document.createElement('td');
        tdFacNum.textContent = `${el.facultyNumber}`;
        tr.appendChild(tdFacNum);
        let tdGrade = document.createElement('td');
        tdGrade.textContent = `${el.grade}`;
        tr.appendChild(tdGrade);

        table.appendChild(tr);
    }

}


async function onSubmit(event) {
    event.preventDefault();
    const form = document.querySelector('form');

    let formData = new FormData(form);

    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let facultyNumber = formData.get('facultyNumber');
    let grade = formData.get('grade');


    if (!firstName || !lastName || !facultyNumber || !grade) {
        return;
    }

    let data = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    }

    let res = await fetch(url, data);
    await res.json();
    showTable();

}