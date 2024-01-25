function solve() {
  const txt = document.getElementById('text');
  const convention = document.getElementById('naming-convention');

  let text = txt.value;
  text = text.toLowerCase();
  let namingConvention = convention.value;

  let textArr = text.split(' ');
  let result = '';

  if (namingConvention == 'Camel Case') {
    result += textArr.shift();
    for (let word of textArr) {
      let converted = word[0].toUpperCase() + word.substring(1);
      result += converted;
    }
  } else if (namingConvention == 'Pascal Case') {
    for (let word of textArr) {
      let converted = word[0].toUpperCase() + word.substring(1);
      result += converted;
    }
  } else {
    result = 'Error!'
  }

  document.getElementById('result').textContent = result;
}