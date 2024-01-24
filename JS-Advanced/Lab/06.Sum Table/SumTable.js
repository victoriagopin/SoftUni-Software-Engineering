function sumTable() {
    let list = document.getElementsByTagName('td');
    let listArr = Array.from(list);
    let total = 0;

    for (let i = 1; i < list.length - 2; i += 2) {

        let num = list[i].textContent;
        total += Number(num);
    }

    document.getElementById('sum').textContent = total;
}