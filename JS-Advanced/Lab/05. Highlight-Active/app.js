function focused() {
    let sections = document.querySelectorAll('body div div input');
    let arrOfSections = Array.from(sections);


    let currentFocusedSection = null; // Variable to keep track of the currently focused section

    for (let i = 0; i < arrOfSections.length; i++) {
        let currentSection = arrOfSections[i];

        // Add event listener for click
        currentSection.addEventListener('click', function (event) {
            removeClass(); // Remove class from the previously focused section
            addClass(event); // Add class to the clicked section
        });

        // Add event listener for mouseout

    }

    function addClass(event) {
        let curSection = event.target;
        let divEl = curSection.parentElement;
        divEl.classList.add('focused');
        currentFocusedSection = divEl; // Update the currently focused section
    }

    function removeClass() {
        for (let i = 0; i < arrOfSections.length; i++) {
            arrOfSections[i].parentElement.classList.remove('focused');
        }
        currentFocusedSection = null; // Reset the currently focused section
    }


}









