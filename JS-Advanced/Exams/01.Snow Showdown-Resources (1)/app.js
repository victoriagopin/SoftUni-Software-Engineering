window.addEventListener("load", solve);

function solve() {


  let [nameRef, heightRef, locationRef, creatorRef] = document.querySelectorAll('input');
  let attributeRef = document.getElementById('special-attribute');
  let addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', moveToPreview);

  let name = '';
  let height = '';
  let location1 = '';
  let creator = '';
  let attributee = '';

  function moveToPreview(event) {
    event.preventDefault();


    if (nameRef.value == '' || heightRef.value == '' || locationRef.value == '' || creatorRef.value == '' || attributeRef.value == '') {
      return;
    }
    addBtn.disabled = true;
    name = nameRef.value;
    height = heightRef.value;
    location1 = locationRef.value;
    creator = creatorRef.value;
    attributee = attributeRef.value;

    nameRef.value = '';
    heightRef.value = '';
    locationRef.value = '';
    creatorRef.value = '';
    attributeRef.value = '';

    createSection(name, height, location1, creator, attributee);
  }

  function createSection(name, height, location1, creator, attributee) {
    let ulEl = document.querySelector('.snowman-preview');

    let liEl = document.createElement('li');
    liEl.classList.add('snowman-info');
    let article = document.createElement('article');
    let pName = document.createElement('p');
    pName.textContent = `Name: ${name}`;
    let pHeigth = document.createElement('p');
    pHeigth.textContent = `Height: ${height}`;
    let pLocation = document.createElement('p');
    pLocation.textContent = `Location: ${location1}`;
    let pCreator = document.createElement('p');
    pCreator.textContent = `Creator: ${creator}`;
    let pAttribute = document.createElement('p');
    pAttribute.textContent = `Attribute: ${attributee}`;
    article.appendChild(pName);
    article.appendChild(pHeigth);
    article.appendChild(pLocation);
    article.appendChild(pCreator);
    article.appendChild(pAttribute);
    liEl.appendChild(article);
    let divBtns = document.createElement('div');
    divBtns.classList.add('btn-container');
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit'
    editBtn.addEventListener('click', moveBack);
    editBtn.classList.add('edit-btn');
    let nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.addEventListener('click', moveToFinish);
    nextBtn.classList.add('next-btn');
    divBtns.appendChild(editBtn);
    divBtns.appendChild(nextBtn);
    liEl.appendChild(divBtns);
    ulEl.appendChild(liEl);

  }

  function moveBack() {
    addBtn.disabled = false;

    let ulEl = document.querySelector('.snowman-preview');

    while (ulEl.firstChild) {
      ulEl.removeChild(ulEl.firstChild);

      nameRef.value = name;
      heightRef.value = height;
      locationRef.value = location1;
      creatorRef.value = creator;
      attributeRef.value = attributee;
    }
  }

  function moveToFinish() {
    let ulEl = document.querySelector('.snowman-preview');

    while (ulEl.firstChild) {
      ulEl.removeChild(ulEl.firstChild);
    }

    let ulEl2 = document.querySelector('.snow-list');

    let liEl = document.createElement('li');
    liEl.classList.add('snowman-preview', 'snowman-content');
    let article = document.createElement('article');
    let pName = document.createElement('p');
    pName.textContent = `Name: ${name}`;
    let pHeigth = document.createElement('p');
    pHeigth.textContent = `Height: ${height}`;
    let pLocation = document.createElement('p');
    pLocation.textContent = `Location: ${location1}`;
    let pCreator = document.createElement('p');
    pCreator.textContent = `Creator: ${creator}`;
    let pAttribute = document.createElement('p');
    pAttribute.textContent = `Attribute: ${attributee}`;
    article.appendChild(pName);
    article.appendChild(pHeigth);
    article.appendChild(pLocation);
    article.appendChild(pCreator);
    article.appendChild(pAttribute);
    let sendBtn = document.createElement('button');
    sendBtn.textContent = 'Send'
    sendBtn.addEventListener('click', send);
    sendBtn.classList.add('send-btn');
    article.appendChild(sendBtn);
    liEl.appendChild(article);
    ulEl2.appendChild(liEl);

  }

  function send() {
    let mainEl = document.getElementById('hero');
    mainEl.remove();

    let img = document.getElementById('back-img');
    img.removeAttribute('hidden');
    let body = document.querySelector('.body');
    let btn = document.createElement('button');
    btn.textContent = 'Back';
    body.appendChild(btn);
    btn.addEventListener('click', function () {
      location.reload();
    })


  }
}

