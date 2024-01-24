function calc() {
    let n1 = document.getElementById('num1');
    let n2 = document.getElementById('num2');

    let result = Number(n1.value) + Number(n2.value);

    document.getElementById('sum').value = result;
}
