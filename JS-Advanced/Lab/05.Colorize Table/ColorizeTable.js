function colorize() {
    let list = document.querySelectorAll('tr');

    for (let i = 1; i < list.length; i += 2) {
        list[i].style.background = 'teal';
    }
}