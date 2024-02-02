function notify(message) {

  let divEl = document.getElementById('notification');
  divEl.style.display = 'block';
  divEl.textContent = message;
  divEl.addEventListener('click', hide);

  function hide() {
    divEl.style.display = 'none';
  }
}