window.addEventListener('load', solve);

function solve() {
    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', moveToPreview);
    let firstName = '';
    let lastName = '';
    let numOfPeople = '';
    let fromDtae = '';
    let days = ''

    function moveToPreview(event) {
        event.preventDefault();
        nextBtn.disabled = true;

        let [firstNameRef, lastNameRef, numOfPeopleRef, dateRef, daysRef] = document.querySelectorAll('input');

        if (firstNameRef.value == '' || lastNameRef.value == '' || numOfPeopleRef.value == '' || dateRef.value == '' || daysRef.value == '') {
            return;
        }

        firstName = firstNameRef.value;
        lastName = lastNameRef.value;
        numOfPeople = numOfPeopleRef.value;
        fromDtae = dateRef.value;
        days = daysRef.value;

        createPreviewSec(firstName, lastName, numOfPeople, fromDtae, days);

        firstNameRef.value = '';
        lastNameRef.value = '';
        numOfPeopleRef.value = '';
        dateRef.value = '';
        daysRef.value = '';
    }

    function createPreviewSec(firstName, lastName, numOfPeople, fromDtae, days) {
        let ulEl = document.querySelector('ul.ticket-info-list');

        let liEl = document.createElement('li');
        liEl.classList.add('ticket');
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName} ${lastName}`;
        let pDtae = document.createElement('p');
        pDtae.textContent = `From date: ${fromDtae}`;
        let pDays = document.createElement('p');
        pDays.textContent = `For ${days} days`;
        let pPeople = document.createElement('p');
        pPeople.textContent = `For ${numOfPeople} people`;
        article.appendChild(h3);
        article.appendChild(pDtae);
        article.appendChild(pDays);
        article.appendChild(pPeople);
        liEl.appendChild(article);
        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editFunc);
        editBtn.classList.add('edit-btn');
        let coninueBtn = document.createElement('button');
        coninueBtn.textContent = 'Continue';
        coninueBtn.addEventListener('click', moveToConfirm);
        coninueBtn.classList.add('continue-btn');
        liEl.appendChild(editBtn);
        liEl.appendChild(coninueBtn);
        ulEl.appendChild(liEl);
    }


    function editFunc() {
        let [firstNameRef, lastNameRef, numOfPeopleRef, dateRef, daysRef] = document.querySelectorAll('input');

        firstNameRef.value = firstName;
        lastNameRef.value = lastName;
        numOfPeopleRef.value = numOfPeople;
        dateRef.value = fromDtae;
        daysRef.value = days;
        nextBtn.disabled = false;

        let ulEl = document.querySelector('ul.ticket-info-list');


        while (ulEl.firstChild) {
            ulEl.removeChild(ulEl.firstChild);
        }
    }

    function moveToConfirm() {
        let ulEl2 = document.querySelector('ul.ticket-info-list');


        while (ulEl2.firstChild) {
            ulEl2.removeChild(ulEl2.firstChild);
        }

        let ulEl = document.querySelector('ul.confirm-ticket');

        let liEl = document.createElement('li');
        liEl.classList.add('ticket-content');
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName} ${lastName}`;
        let pDtae = document.createElement('p');
        pDtae.textContent = `From date: ${fromDtae}`;
        let pDays = document.createElement('p');
        pDays.textContent = `For ${days} days`;
        let pPeople = document.createElement('p');
        pPeople.textContent = `For ${numOfPeople} people`;
        article.appendChild(h3);
        article.appendChild(pDtae);
        article.appendChild(pDays);
        article.appendChild(pPeople);
        liEl.appendChild(article);
        let confirmBtn = document.createElement('button');
        confirmBtn.textContent = 'Confirm';
        confirmBtn.addEventListener('click', final);
        confirmBtn.classList.add('confirm-btn');
        let cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', cancel);
        cancelBtn.classList.add('cancel-btn');
        liEl.appendChild(confirmBtn);
        liEl.appendChild(cancelBtn);
        ulEl.appendChild(liEl);
    }

    function final() {
        let div = document.getElementById('main');
        div.remove();
        let h1 = document.createElement('h1');
        h1.id = 'thank-you';
        h1.textContent = 'Thank you, have a nice day!';
        let button = document.createElement('button');
        button.id = 'back-btn';
        button.textContent = 'Back';
        button.addEventListener('click', function () {
            location.reload();
        })
        let body = document.getElementById('body');
        body.appendChild(h1);
        body.appendChild(button);
    }

    function cancel() {
        nextBtn.disabled = false;
        let ulEl2 = document.querySelector('ul.confirm-ticket');


        while (ulEl2.firstChild) {
            ulEl2.removeChild(ulEl2.firstChild);
        }

    }

}




