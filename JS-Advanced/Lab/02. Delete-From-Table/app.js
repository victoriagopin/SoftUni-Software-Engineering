function deleteByEmail() {
    const input = document.querySelector('[name = "email"]');
    let result = document.getElementById('result');
    const table = document.querySelector('tbody');
    let items = table.querySelectorAll('tr');
    items = Array.from(items);
    let isFound = false;

    for (let row of items) {
        let item = row.querySelectorAll('td');
        item = Array.from(item);
        if (item[1].textContent == input.value) {
            table.removeChild(row);
            isFound = true;
        }
    }

    if (isFound) {
        result.textContent = 'Deleted.'
        input.value = '';
    } else {
        result.textContent = 'Not found.'
    }
}