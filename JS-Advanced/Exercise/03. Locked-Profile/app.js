function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'));

    for (let button of buttons) {
        button.addEventListener('click', showMore);

    }

    function showMore(event) {
        let showBtn = event.currentTarget.parentElement;
        let input = showBtn.querySelector("input[type='radio']:checked");
        let state = input.value;

        if (state == 'unlock') {
            let showBtn = event.currentTarget;
            if (showBtn.textContent == 'Show more') {
                event.target.parentElement.querySelector('div').style.display = 'block';
                showBtn.textContent = 'Hide it';
            } else {
                showBtn.textContent = 'Show more';
                event.target.parentElement.querySelector('div').style.display = 'none';
            }
        }
    }

}