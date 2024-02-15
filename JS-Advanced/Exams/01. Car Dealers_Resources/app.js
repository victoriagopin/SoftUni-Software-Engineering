window.addEventListener("load", solve);

function solve() {
  let [makeRef, modelRef, yearRef, originalCostRef, sellingRef] = document.querySelectorAll('input');
  let fuelRef = document.getElementById('fuel');
  let publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', move);

  let make = '';
  let model = '';
  let year = '';
  let originalCost = '';
  let sellingCost = '';
  let fuel = '';

  function move(event) {
    event.preventDefault();

    if (makeRef.value == '' || modelRef.value == '' || yearRef.value == '' || originalCostRef.value == '' || sellingRef.value == '' || fuelRef.value == '') {
      return;
    }

    if (sellingRef.value < originalCostRef.value) {
      return;
    }

    model = modelRef.value;
    make = makeRef.value;
    year = yearRef.value;
    originalCost = originalCostRef.value;
    sellingCost = sellingRef.value;
    fuel = fuelRef.value;

    let table = document.getElementById('table-body');
    let trEl = document.createElement('tr');
    trEl.classList.add('row');
    let tdElMake = document.createElement('td');
    tdElMake.textContent = `${make}`;
    let tdElModel = document.createElement('td');
    tdElModel.textContent = `${model}`;
    let tdElYear = document.createElement('td');
    tdElYear.textContent = `${year}`;
    let tdElFuel = document.createElement('td');
    tdElFuel.textContent = `${fuel}`;
    let tdElOriginalPrice = document.createElement('td');
    tdElOriginalPrice.textContent = `${originalCost}`;
    let tdElSelling = document.createElement('td');
    tdElSelling.textContent = `${sellingCost}`;
    let tdButtons = document.createElement('td');
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', moveBack);
    editBtn.classList.add('action-btn', 'edit');
    let sellBtn = document.createElement('button');
    sellBtn.addEventListener('click', sell);
    sellBtn.textContent = 'Sell';
    sellBtn.classList.add('action-btn', 'sell');
    tdButtons.appendChild(editBtn);
    tdButtons.appendChild(sellBtn);
    trEl.appendChild(tdElMake);
    trEl.appendChild(tdElModel);
    trEl.appendChild(tdElYear);
    trEl.appendChild(tdElFuel);
    trEl.appendChild(tdElOriginalPrice);
    trEl.appendChild(tdElSelling);
    trEl.appendChild(tdButtons);
    table.appendChild(trEl);

    makeRef.value = '';
    modelRef.value = '';
    yearRef.value = '';
    fuelRef.value = '';
    originalCostRef.value = '';
    sellingRef.value = '';

  }

  function moveBack() {
    let table = document.getElementById('table-body');

    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }

    makeRef.value = make;
    modelRef.value = model;
    yearRef.value = year;
    fuelRef.value = fuel;
    originalCostRef.value = originalCost;
    sellingRef.value = sellingCost;
  }

  function sell() {
    let table = document.getElementById('table-body');

    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }

    let ulEl = document.getElementById('cars-list');
    let liEl = document.createElement('li');
    liEl.classList.add('each-list');
    let spanMakeAndModel = document.createElement('span');
    spanMakeAndModel.textContent = `${make} ${model}`;
    let spanYear = document.createElement('span');
    spanYear.textContent = `${year}`;
    let price = sellingCost - originalCost;
    let spanDiff = document.createElement('span');
    spanDiff.textContent = `${price}`;
    liEl.appendChild(spanMakeAndModel);
    liEl.appendChild(spanYear);
    liEl.appendChild(spanDiff);
    ulEl.appendChild(liEl);

    let profit = document.getElementById('profit');
    profit.textContent = price.toFixed(2);

  }
}
