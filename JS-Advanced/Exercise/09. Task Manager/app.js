function solve() {
    let addBtnRef = document.getElementById('add');
    addBtnRef.addEventListener('click', add);
    let [addSectionRef, openSectionRef, inProgressSectionRef, completeSectionRef] = document.querySelectorAll('section');

    function add(event) {

        event.preventDefault();
        let inputsRef = Array.from(event.target.parentElement.querySelectorAll('input'));
        let descriptionRef = event.target.parentElement.querySelector('textarea');

        if (inputsRef[0].value == '' || inputsRef[1].value == '' || descriptionRef.value == '') {
            return;
        }

        let task = inputsRef[0].value;
        let date = inputsRef[1].value;
        let description = descriptionRef.value;

        createSection(task, date, description, openSectionRef);

        let articleEl = openSectionRef.children[1].lastElementChild;
        let divEl = document.createElement('div');
        divEl.classList.add('flex');
        let btnStartEl = document.createElement('button');
        btnStartEl.textContent = 'Start';
        btnStartEl.addEventListener('click', moveToProgress);
        btnStartEl.classList.add('green');
        let btnDelEl = document.createElement('button');
        btnDelEl.textContent = 'Delete';
        btnDelEl.addEventListener('click', toDelete);
        btnDelEl.classList.add('red');
        divEl.appendChild(btnStartEl);
        divEl.appendChild(btnDelEl);
        articleEl.appendChild(divEl);

    }


    function toDelete(event) {
        let articleEl = event.target.parentElement.parentElement;
        articleEl.remove();
    }






    function createSection(task, date, description, section) {


        let articleEl = document.createElement('article');
        let h3El = document.createElement('h3');
        h3El.textContent = task;
        let pDescEl = document.createElement('p');
        pDescEl.textContent = `Description: ${description}`;
        let pDateEl = document.createElement('p');
        pDateEl.textContent = `Due Date: ${date}`;
        articleEl.appendChild(h3El);
        articleEl.appendChild(pDescEl);
        articleEl.appendChild(pDateEl);
        section.children[1].appendChild(articleEl);
    }

    function moveToProgress(event) {

        let [descP, dateP] = Array.from(event.target.parentElement.parentElement.querySelectorAll('p'));
        let taskRef = event.target.parentElement.parentElement.querySelector('h3');

        let [word, description] = descP.textContent.split(': ');
        let [word2, date] = dateP.textContent.split(': ');
        let task = taskRef.textContent;

        createSection(task, date, description, inProgressSectionRef);

        let divEl = document.createElement('div');
        divEl.classList.add('flex');
        let btnDeleteEl = document.createElement('button');
        btnDeleteEl.textContent = 'Delete';
        btnDeleteEl.addEventListener('click', toDelete);
        btnDeleteEl.classList.add('red');
        let btnFinishEl = document.createElement('button');
        btnFinishEl.textContent = 'Finish';
        btnFinishEl.addEventListener('click', moveToFinish);
        btnFinishEl.classList.add('orange');
        divEl.appendChild(btnDeleteEl);
        divEl.appendChild(btnFinishEl);
        inProgressSectionRef.children[1].children[0].appendChild(divEl);
    }

    function moveToFinish(event) {
        let [descP, dateP] = Array.from(event.target.parentElement.parentElement.querySelectorAll('p'));
        let taskRef = event.target.parentElement.parentElement.querySelector('h3');

        let [word, description] = descP.textContent.split(': ');
        let [word2, date] = dateP.textContent.split(': ');
        let task = taskRef.textContent;

        createSection(task, description, date, completeSectionRef);
    }
}