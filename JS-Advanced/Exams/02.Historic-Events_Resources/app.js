window.addEventListener("load", solve);

function solve() {
  const ulPreviewElement = document.getElementById('preview-list');
  const ulArchiveList = document.getElementById('archive-list');
  const addBtnElement = document.getElementById('add-btn');
  const nameInput = document.getElementById('name');
  const dateInput = document.getElementById('time');
  const descriptionInput = document.getElementById('description');
  
  addBtnElement.addEventListener('click', onAdd);

  function onAdd(e){
    e.preventDefault();

    const name = nameInput.value;
    const date = dateInput.value;
    const description = descriptionInput.value;

    if(!name || !date || !description){
      return;
    }

    const liEl = createPrevieListElement(name, date, description);

    ulPreviewElement.appendChild(liEl);
    clearInputFields();

  }

  function createPrevieListElement(name, date, description){
    addBtnElement.disabled = 'true';

    const pNameEl = document.createElement('p');
    pNameEl.textContent = name;
    const pDateEl = document.createElement('p');
    pDateEl.textContent = date;
    const pDescriptionEl = document.createElement('p');
    pDescriptionEl.textContent = description;

    const articleEl = document.createElement('article');
    articleEl.appendChild(pNameEl);
    articleEl.appendChild(pDateEl);
    articleEl.appendChild(pDescriptionEl);

    const editBtnEl = document.createElement('button');
    editBtnEl.textContent = 'Edit';
    editBtnEl.classList.add('edit-btn');

    const nextBtnEl = document.createElement('button');
    nextBtnEl.textContent = 'Next';
    nextBtnEl.classList.add('next-btn');    

    const divButtons = document.createElement('div');
    divButtons.classList.add('buttons');
    divButtons.appendChild(editBtnEl);
    divButtons.appendChild(nextBtnEl);

    const liEl = document.createElement('li');
    liEl.appendChild(articleEl);
    liEl.appendChild(divButtons);

    editBtnEl.addEventListener('click', () => {
      nameInput.value = name;
      dateInput.value = date;
      descriptionInput.value = description;

      addBtnElement.removeAttribute('disabled');

      liEl.remove();
    });

    nextBtnEl.addEventListener('click', () => {
      liEl.remove();

      const liArchive = createArchiveList(name, date, description);
      ulArchiveList.appendChild(liArchive);
      return;
    })

    return liEl;
  }

  function createArchiveList(name,date, description){
    const pNameEl = document.createElement('p');
    pNameEl.textContent = name;
    const pDateEl = document.createElement('p');
    pDateEl.textContent = date;
    const pDescriptionEl = document.createElement('p');
    pDescriptionEl.textContent = description;

    const articleEl = document.createElement('article');
    articleEl.appendChild(pNameEl);
    articleEl.appendChild(pDateEl);
    articleEl.appendChild(pDescriptionEl);

    const archiveBtnEl = document.createElement('button');
    archiveBtnEl.textContent = 'Archive';
    archiveBtnEl.classList.add('archive-btn');
  

    const liEl = document.createElement('li');
    liEl.appendChild(articleEl);
    liEl.appendChild(archiveBtnEl);

    archiveBtnEl.addEventListener('click', () => {
      liEl.remove();
      addBtnElement.removeAttribute('disabled');
      return;
    })

    return liEl;
  }

  function clearInputFields(){
    nameInput.value = '';
    dateInput.value = '';
    descriptionInput.value = '';
  }
}