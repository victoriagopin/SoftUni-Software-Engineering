function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const list = document.querySelectorAll('tbody tr');
      const search = document.getElementById('searchField');

      let arrOfNames = Array.from(list);

      for (let row of arrOfNames) {
         let el = row.textContent
         if (el.includes(search.value)) {
            row.classList.add('select');

         } else {
            row.classList.remove('select');
         }

      }
      search.value = '';
   }
}