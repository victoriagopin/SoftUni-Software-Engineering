function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll('input[type="button"]'));

    for (let button of buttons) {
        button.addEventListener('click', extractInf);
    }

    function extractInf(event) {

        let btnInput = event.currentTarget;
        let parent = btnInput.parentElement;
        let unitField = parent.children[1];
        let unit = unitField.id;
        let value = unitField.value;

        let minutes = 0;
        let hours = 0;
        let seconds = 0;
        let days = 0;

        if (unit == 'days') {
            days = value;
            minutes = value * 24 * 60;
            hours = value * 24;
            seconds = value * 24 * 60 * 60;
        } else if (unit == 'hours') {
            hours = value;
            minutes = value * 60;
            seconds = value * 60 * 60;
            days = value / 24;
        } else if (unit == 'minutes') {
            minutes = value;
            seconds = value * 60;
            hours = value / 60;
            days = value / 60 / 24;
        } else if (unit == 'seconds') {
            seconds = value;
            minutes = value / 60;
            hours = value / 60 / 60;
            days = value / 60 / 60 / 24;
        }

        document.querySelector('input#days').value = days;
        document.querySelector('input#minutes').value = minutes;
        document.querySelector('input#hours').value = hours;
        document.querySelector('input#seconds').value = seconds;

    }



}