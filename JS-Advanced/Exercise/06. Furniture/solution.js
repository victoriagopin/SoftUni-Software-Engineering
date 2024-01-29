function solve() {
  let [generateTextArea, buyTextArea] = document.querySelectorAll('textarea');
  let [generateBtn, buyBtn] = document.querySelectorAll('button');
  let tbodyRef = document.querySelector('tbody');

  generateBtn.addEventListener('click', generate);

  function generate() {

    let value = generateTextArea.value;
    let arrOfObjs = JSON.parse(value);

    for (let obj of arrOfObjs) {
      let trEl = document.createElement('tr');
      let tdImgEl = document.createElement('td');
      let imgEl = document.createElement('img');
      imgEl.src = obj.img;
      tdImgEl.appendChild(imgEl);
      trEl.appendChild(tdImgEl);
      tbodyRef.appendChild(trEl);


      let tdNameEl = document.createElement('td');
      let pNameEl = document.createElement('p');
      pNameEl.textContent = obj.name;
      tdNameEl.appendChild(pNameEl);
      trEl.appendChild(tdNameEl);

      let tdPriceEl = document.createElement('td');
      let pPriceEl = document.createElement('p');
      pPriceEl.textContent = obj.price;
      tdPriceEl.appendChild(pPriceEl);
      trEl.appendChild(tdPriceEl);

      let tdDecFacEl = document.createElement('td');
      let pDecFacEl = document.createElement('p');
      pDecFacEl.textContent = obj.decFactor;
      tdDecFacEl.appendChild(pDecFacEl);
      trEl.appendChild(tdDecFacEl);

      let tdInputEl = document.createElement('td');
      let checkBoxEl = document.createElement('input');
      checkBoxEl.type = 'checkbox';
      tdInputEl.appendChild(checkBoxEl);
      trEl.appendChild(tdInputEl);

    }

  }

  buyBtn.addEventListener('click', buy);

  function buy() {
    let checked = Array.from(document.querySelectorAll('input:checked'));

    let furnitures = [];
    let totalPrice = 0;
    let decFac = 0;

    for (let el of checked) {
      let elements = Array.from(el.parentElement.parentElement.children);
      furnitures.push(elements[1].textContent);
      totalPrice += Number(elements[2].textContent);
      decFac += Number(elements[3].textContent);
    }

    let result = '';
    result += `Bought furniture: ${furnitures.join(', ')}\n`
    result += `Total price: ${totalPrice.toFixed(2)}\n`
    result += `Average decoration factor: ${decFac / furnitures.length}`
    buyTextArea.textContent = result;
  }

}