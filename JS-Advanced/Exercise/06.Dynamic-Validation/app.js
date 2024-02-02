function validate() {
    let pattern = /^[a-z0-9]+@[a-z]+.[a-z]+$/g;
    let input = document.getElementById('email');
    input.addEventListener('change', addClass);

    function addClass() {

        if (!input.value.match(pattern)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }
}