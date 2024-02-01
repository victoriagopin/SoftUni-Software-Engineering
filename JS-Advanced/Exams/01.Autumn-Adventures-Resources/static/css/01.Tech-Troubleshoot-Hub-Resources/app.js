window.addEventListener('load', solution);

function solution() {

  let [employeeInputRef, descriptionInputRef] = Array.from(document.querySelectorAll('input'));
  let [categorySelectRef, urgensySelectRef, teamSelecRef] = Array.from(document.querySelectorAll('select'));
  let addBtnRef = document.getElementById('add-btn');
  addBtnRef.addEventListener('click', moveToPreview);

  let employee = '';
  let category = '';
  let urgency = '';
  let team = '';
  let description = '';

  function moveToPreview(event) {
    event.preventDefault();

    if (employeeInputRef.value == '' || categorySelectRef.value == '' || urgensySelectRef.value == '' || teamSelecRef.value == '' || descriptionInputRef.value == '') {
      return;
    }

    addBtnRef.disabled = true;



    employee = employeeInputRef.value;
    category = categorySelectRef.value;
    urgency = urgensySelectRef.value;
    team = teamSelecRef.value;
    description = descriptionInputRef.value;

    createPreviewSection(employee, category, urgency, team, description);

    employeeInputRef.value = '';
    categorySelectRef.value = '';
    urgensySelectRef.value = '';
    teamSelecRef.value = '';
    descriptionInputRef.value = '';
  }

  function createPreviewSection(employee, category, urgency, team, description) {
    let ulEl = document.querySelector('ul.preview-list');

    let liEl = document.createElement('li');
    liEl.classList.add('problem-content');
    let articleEl = document.createElement('article');
    let pFromEl = document.createElement('p');
    pFromEl.textContent = `From: ${employee}`;
    articleEl.appendChild(pFromEl);
    let pCategoryEl = document.createElement('p');
    pCategoryEl.textContent = `Category: ${category}`;
    articleEl.appendChild(pCategoryEl);
    let pUrgencyEl = document.createElement('p');
    pUrgencyEl.textContent = `Urgency: ${urgency}`;
    articleEl.appendChild(pUrgencyEl);
    let pAssignedEl = document.createElement('p');
    pAssignedEl.textContent = `Assigned to: ${team}`;
    articleEl.appendChild(pAssignedEl);
    let pDescriptionEl = document.createElement('p');
    pDescriptionEl.textContent = `Description: ${description}`;
    articleEl.appendChild(pDescriptionEl);
    let editBtnEl = document.createElement('button');
    editBtnEl.textContent = 'Edit';
    editBtnEl.classList.add('edit-btn');
    editBtnEl.addEventListener('click', edit);
    liEl.appendChild(articleEl);
    liEl.appendChild(editBtnEl);
    let continueBtnEl = document.createElement('button');
    continueBtnEl.textContent = 'Continue';
    continueBtnEl.addEventListener('click', function () {
      continueFunc(employee, category, urgency, team, description);
    });

    continueBtnEl.classList.add('continue-btn');
    liEl.appendChild(continueBtnEl);
    ulEl.appendChild(liEl);
  }

  function edit() {
    employeeInputRef.value = employee;
    categorySelectRef.value = category;
    urgensySelectRef.value = urgency;
    teamSelecRef.value = team;
    descriptionInputRef.value = description;

    let ulEl = document.querySelector('ul.preview-list');
    addBtnRef.disabled = false;

    while (ulEl.firstChild) {
      ulEl.removeChild(ulEl.firstChild);
    }

  }

  function continueFunc(employee, category, urgency, team, description) {
    let ulEl1 = document.querySelector('ul.preview-list');

    while (ulEl1.firstChild) {
      ulEl1.removeChild(ulEl1.firstChild);
    }

    let ulEl = document.querySelector('ul.pending-list');

    let liEl = document.createElement('li');
    liEl.classList.add('problem-content');
    let articleEl = document.createElement('article');
    let pFromEl = document.createElement('p');
    pFromEl.textContent = `From: ${employee}`;
    articleEl.appendChild(pFromEl);
    let pCategoryEl = document.createElement('p');
    pCategoryEl.textContent = `Category: ${category}`;
    articleEl.appendChild(pCategoryEl);
    let pUrgencyEl = document.createElement('p');
    pUrgencyEl.textContent = `Urgency: ${urgency}`;
    articleEl.appendChild(pUrgencyEl);
    let pAssignedEl = document.createElement('p');
    pAssignedEl.textContent = `Assigned to: ${team}`;
    articleEl.appendChild(pAssignedEl);
    let pDescriptionEl = document.createElement('p');
    pDescriptionEl.textContent = `Description: ${description}`;
    articleEl.appendChild(pDescriptionEl);
    let resolveBtnEl = document.createElement('button');
    resolveBtnEl.textContent = 'Resolved';
    resolveBtnEl.classList.add('resolve-btn');
    resolveBtnEl.addEventListener('click', function () {
      resolved(employee, category, urgency, team, description);
    });
    liEl.appendChild(articleEl);
    liEl.appendChild(resolveBtnEl);
    ulEl.appendChild(liEl);

  }

  function resolved(employee, category, urgency, team, description) {
    let ulEl1 = document.querySelector('ul.pending-list');

    while (ulEl1.firstChild) {
      ulEl1.removeChild(ulEl1.firstChild);
    }

    let ulEl = document.querySelector('ul.resolved-list');

    let liEl = document.createElement('li');
    liEl.classList.add('problem-content');
    let articleEl = document.createElement('article');
    let pFromEl = document.createElement('p');
    pFromEl.textContent = `From: ${employee}`;
    articleEl.appendChild(pFromEl);
    let pCategoryEl = document.createElement('p');
    pCategoryEl.textContent = `Category: ${category}`;
    articleEl.appendChild(pCategoryEl);
    let pUrgencyEl = document.createElement('p');
    pUrgencyEl.textContent = `Urgency: ${urgency}`;
    articleEl.appendChild(pUrgencyEl);
    let pAssignedEl = document.createElement('p');
    pAssignedEl.textContent = `Assigned to: ${team}`;
    articleEl.appendChild(pAssignedEl);
    let pDescriptionEl = document.createElement('p');
    pDescriptionEl.textContent = `Description: ${description}`;
    articleEl.appendChild(pDescriptionEl);
    let clearBtnEl = document.createElement('button');
    clearBtnEl.textContent = 'Clear';
    clearBtnEl.classList.add('clear-btn');
    clearBtnEl.addEventListener('click', clear);

    liEl.appendChild(articleEl);
    liEl.appendChild(clearBtnEl);
    ulEl.appendChild(liEl);

  }

  function clear() {
    let ulEl1 = document.querySelector('ul.resolved-list');

    while (ulEl1.firstChild) {
      ulEl1.removeChild(ulEl1.firstChild);
    }
  }
}






