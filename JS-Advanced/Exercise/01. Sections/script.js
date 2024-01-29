function create(words) {

   for (let word of words) {
      let divEl = document.createElement('div');
      divEl.addEventListener('click', showPara);
      let paraEl = document.createElement('p');
      paraEl.textContent = word;
      paraEl.style.display = 'none';
      divEl.appendChild(paraEl);
      document.getElementById('content').appendChild(divEl);
   }

   function showPara(event) {
      let divEl = event.currentTarget;
      let para = divEl.children[0];
      para.style.display = 'block';
   }
}