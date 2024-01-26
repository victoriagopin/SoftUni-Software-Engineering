function addItem() {
    const input = document.getElementById('newItemText');
    const items = document.getElementById('items');

    if (input.value.length == 0) {
        return;
    }
    let newEl = document.createElement('li');
    newEl.textContent = input.value;
    items.appendChild(newEl);
    input.value = '';
}