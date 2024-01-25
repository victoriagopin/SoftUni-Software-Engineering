function solve() {
  debugger
  let textArea = document.getElementById('input');
  const input = textArea.value;
  const output = document.getElementById('output');

  const text = input.split('.').filter((el) => el.length > 0);

  while (text.length > 0) {
    let elemetns = text.splice(0, 3);
    output.innerHTML += `<p>${elemetns.join('. ') + '.'}</p>`
  }

}