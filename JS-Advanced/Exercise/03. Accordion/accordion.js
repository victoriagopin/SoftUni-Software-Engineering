function toggle() {
    const btn = document.querySelector('span');
    const text = document.getElementById('extra');

    if (text.style.display == 'none') {
        //let content = text.textContent;
        text.style.display = 'block';
        btn.textContent = 'Less';
    } else {
        text.style.display = 'none';
        btn.textContent = 'More';
    }
}
