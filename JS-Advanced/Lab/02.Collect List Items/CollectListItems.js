function extractText() {
    let result = [];
    let list = document.getElementById('items');
    const arr = Array.from(list.children);

    for (let el of arr) {
        result.push(el.textContent);
    }

    result = result.join('\n');
    let textArea = document.getElementById('result').value = result;

}