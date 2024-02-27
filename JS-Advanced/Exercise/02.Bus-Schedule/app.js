function solve() {
    let stopName = document.querySelector('.info');
    let departInput = document.getElementById('depart');
    let arriveInput = document.getElementById('arrive');
    departInput.addEventListener('click', depart);
    let url = 'http://localhost:3030/jsonstore/bus/schedule/'

    let stops = {
        curStop: "",
        nextStop: "depot"
    }

    async function depart() {
        try {
            arriveInput.disabled = false;
            departInput.disabled = true;
            let response = await fetch(url + stops.nextStop);
            let data = await response.json();
            debugger
            stopName.textContent = `Next stop ${data.name}`
            stops.nextStop = data.next;
            stops.curStop = data.name;
        } catch (error) {
            stopName.textContent = 'Error';
            departInput.disabled = true;
            arriveInput.disabled = true;
        }

    }


    function arrive() {
        departInput.disabled = false;
        arriveInput.disabled = true;

        stopName.textContent = `Arriving at ${stops.curStop}`
    }


    return {
        depart,
        arrive
    };
}

let result = solve();