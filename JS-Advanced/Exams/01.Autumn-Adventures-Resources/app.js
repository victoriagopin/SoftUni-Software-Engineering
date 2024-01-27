window.addEventListener('load', solve);

function solve() {
    let time = document.getElementById('time');
    let date = document.getElementById('date');
    let place = document.getElementById('place');
    let event = document.getElementById('event-name');
    let email = document.getElementById('email');
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', moveToLastChecked);

    function moveToLastChecked() {
        const initialTime = time.value;
        const initialDate = date.value;
        const initialPlace = place.value;
        const initialEvent = event.value;
        const initialEmail = email.value;

        let ulElement = document.getElementById('check-list');
        addBtn.disabled = true;
        let liElement = document.createElement('li');
        liElement.classList.add('event-content');
        let articleEl = document.createElement('article');
        let paragraphElDateTime = document.createElement('p');
        let paragraphElEvent = document.createElement('p');
        let paragraphElContact = document.createElement('p');
        let paragraphElPLace = document.createElement('p');
        let editBtn = document.createElement('button');
        let continueBtn = document.createElement('button');

        articleEl.appendChild(paragraphElDateTime);
        articleEl.appendChild(paragraphElPLace);
        articleEl.appendChild(paragraphElEvent);
        articleEl.appendChild(paragraphElContact);
        liElement.appendChild(articleEl);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);
        ulElement.appendChild(liElement);


        paragraphElDateTime.textContent = `Begins: ${date.value} at: ${time.value}`;
        paragraphElPLace.textContent = `In: ${place.value}`;
        paragraphElEvent.textContent = `Event: ${event.value}`;
        paragraphElContact.textContent = `Contact: ${email.value}`;
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';

        date.value = '';
        time.value = '';
        place.value = '';
        event.value = '';
        email.value = '';

        editBtn.addEventListener('click', goBack);
        continueBtn.addEventListener('click', moveToUpcoming);

        function goBack() {
            addBtn.disabled = false;
            ulElement.removeChild(liElement);
            dateTimeP = paragraphElDateTime.textContent;
            let arrForDateAndTime = dateTimeP.split(' ');
            let date1 = arrForDateAndTime[1];
            let time2 = arrForDateAndTime[3];
            date.value = date1;
            time.value = time2;
            let placeP = paragraphElPLace.textContent;
            let arrPlace = placeP.split(': ');
            let place2 = arrPlace[1];
            place.value = place2;

            let eventP = paragraphElEvent.textContent;
            let arrEvent = eventP.split(': ');
            let event2 = arrEvent[1];
            event.value = event2;

            let emailP = paragraphElContact.textContent;
            let arrEmail = emailP.split(': ');
            let email2 = arrEmail[1];
            email.value = email2;
        }

        function moveToUpcoming() {
            ulElement.removeChild(liElement);
            let ulUpcoming = document.getElementById('upcoming-list');

            let liElement2 = document.createElement('li');
            liElement2.classList.add('event-content');
            let articleEl = document.createElement('article');
            let paragraphElDateTime = document.createElement('p');
            let paragraphElEvent = document.createElement('p');
            let paragraphElContact = document.createElement('p');
            let paragraphElPLace = document.createElement('p');
            let moveBtn = document.createElement('button');
            moveBtn.classList.add('finished-btn');
            moveBtn.textContent = 'Move to Finished';

            articleEl.appendChild(paragraphElDateTime);
            articleEl.appendChild(paragraphElPLace);
            articleEl.appendChild(paragraphElEvent);
            articleEl.appendChild(paragraphElContact);
            liElement2.appendChild(articleEl);
            liElement2.appendChild(moveBtn);
            ulUpcoming.appendChild(liElement2);


            paragraphElDateTime.textContent = `Begins: ${initialDate} at: ${initialTime}`;
            paragraphElPLace.textContent = `In: ${initialPlace}`;
            paragraphElEvent.textContent = `Event: ${initialEvent}`;
            paragraphElContact.textContent = `Contact: ${initialEmail}`;

            moveBtn.addEventListener('click', moveToFinished);

            function moveToFinished() {
                ulUpcoming.removeChild(liElement2);
                let ulFinished = document.getElementById('finished-list');

                let liElement3 = document.createElement('li');
                liElement3.classList.add('event-content');
                let articleEl = document.createElement('article');
                let paragraphElDateTime = document.createElement('p');
                let paragraphElEvent = document.createElement('p');
                let paragraphElContact = document.createElement('p');
                let paragraphElPLace = document.createElement('p');


                articleEl.appendChild(paragraphElDateTime);
                articleEl.appendChild(paragraphElPLace);
                articleEl.appendChild(paragraphElEvent);
                articleEl.appendChild(paragraphElContact);
                liElement3.appendChild(articleEl);
                ulFinished.appendChild(liElement3);


                paragraphElDateTime.textContent = `Begins: ${initialDate} at: ${initialTime}`;
                paragraphElPLace.textContent = `In: ${initialPlace}`;
                paragraphElEvent.textContent = `Event: ${initialEvent}`;
                paragraphElContact.textContent = `Contact: ${initialEmail}`;


                let clearBtn = document.getElementById('clear');
                clearBtn.addEventListener('click', clear);

                function clear() {
                    ulFinished.removeChild(liElement3);
                }
            }

        }

    }

}




