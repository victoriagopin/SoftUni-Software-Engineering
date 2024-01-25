function search() {
   const list = document.getElementById('towns');
   const searchField = document.getElementById('searchText');

   let arrOfCities = Array.from(list.children);
   let mathces = 0;

   for (let el of arrOfCities) {
      let city = el.textContent;
      if (city.includes(searchField.value)) {
         mathces++;
         el.style.textDecoration = 'underline';
         el.style.fontWeight = 'bold';
      }
   }

   let result = `${mathces} matches found`;

   document.getElementById('result').textContent = result;
}

