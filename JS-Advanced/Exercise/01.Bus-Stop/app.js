async function getInfo() {
    const bus = document.getElementById('stopId');
    const buses = document.getElementById('buses');
    let url = ' http://localhost:3030/jsonstore/bus/businfo/';
    let stopName = document.getElementById('stopName');
    buses.innerHTML = "";
    bus.textContent = '';

    try {

        let response = await fetch(url + bus.value);
        let data = await response.json();
        stopName.textContent = data.name;

        let entries = Object.entries(data.buses)

        for (let [bus, minutes] of entries) {
            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${minutes} minutes`;
            buses.appendChild(li);
        }
    } catch (err) {
        stopName.textContent = 'Error'
    }

}
