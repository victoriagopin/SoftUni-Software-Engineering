function subtract() {
    const n1 = document.getElementById('firstNumber');
    const n2 = document.getElementById('secondNumber');

    let result = Number(n1.value) - Number(n2.value);

    document.getElementById('result').textContent = result;
}