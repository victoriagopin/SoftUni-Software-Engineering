function addItem() {
    const input = document.getElementById('newItemText');
    const items = document.getElementById('items');

    if (input.value.length == 0) {
        return;
    }
    let newEl = document.createElement('li');
    newEl.textContent = input.value;
    items.appendChild(newEl);
    let deleteEl = document.createElement('a');
    deleteEl.href = '#';
    deleteEl.textContent = '[Delete]';
    newEl.appendChild(deleteEl);
    deleteEl.addEventListener('click', deleteFunc);

    input.value = '';

    function deleteFunc(event) {
        let deleteEl = event.target;
        let liElement = deleteEl.parentElement;
        liElement.remove();
    }
}