function attachEvents() {
    let input = document.getElementById('location');
    const submit = document.getElementById('submit');
    submit.addEventListener('click', getWeather);
    let current = document.getElementById('current');
    let forecast = document.getElementById('forecast');
    let allLocationsURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    let todayURL = 'http://localhost:3030/jsonstore/forecaster/today/';

    async function getWeather() {
        let response = await fetch(allLocationsURL);
        let data = await response.json();
        let curLocation = data.find(x => x.name == input.value);

        showToday(curLocation.code);
    }

    async function showToday(code) {
        let response = await fetch(todayURL + code);
        let data = await response.json();

        forecast.style.display = 'block';

        let divForecasts = document.createElement('div');
        divForecasts.classList.add('forecasts');

        let conditionSymbol = document.createElement('span');
        conditionSymbol.innerHTML = symbol(data.forecast.condition);
        conditionSymbol.classList.add('condition');
        conditionSymbol.classList.add('symbol');

        let condition = document.createElement('span');
        condition.classList.add('condition');

        let city = document.createElement('span');
        city.classList.add('forecast-data');
        city.textContent = data.name;

        let degrees = document.createElement('span');
        degrees.textContent = `${data.forecast.low}°/${data.forecast.high}°`;
        degrees.classList.add('forecast-data');

        let weather = document.createElement('span');
        weather.textContent = data.forecast.condition;
        weather.classList.add('forecast-data');

        divForecasts.appendChild(conditionSymbol);
        condition.appendChild(city);
        condition.appendChild(degrees);
        condition.appendChild(weather);
        divForecasts.appendChild(condition);

        current.appendChild(divForecasts);
    }

    function symbol(condition) {
        switch (condition) {
            case "Sunny": return "&#x2600"
            case "Partly sunny": return "&#x26C5"
            case "Rain": return "&#x2614"
            case "Overcast": return "&#x2601"
            case "Degrees": return "&#176"
        }
    }
}

attachEvents();