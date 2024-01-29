function addItem() {
    let textRef = document.getElementById('newItemText');
    let valueRef = document.getElementById('newItemValue');
    let selectElRef = document.getElementById('menu');

    let textValue = textRef.value;
    let value = valueRef.value;
    debugger
    let optionEl = document.createElement('option');
    optionEl.value = value;
    optionEl.textContent = textValue;
    selectElRef.appendChild(optionEl);
    textRef.value = '';
    valueRef.value = '';
}