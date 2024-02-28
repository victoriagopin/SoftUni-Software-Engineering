function attachEvents() {
    let input = document.getElementById('location');
    const submit = document.getElementById('submit');
    submit.addEventListener('click', getWeather);
    let current = document.getElementById('current');
    let upcomingForecast = document.getElementById('upcoming');
    let forecast = document.getElementById('forecast');
    let allLocationsURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    let todayURL = 'http://localhost:3030/jsonstore/forecaster/today/';
    let threeDaysURL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    async function getWeather() {
        upcomingForecast.innerHTML = '';
        current.innerHTML = '';

        let response = await fetch(allLocationsURL);
        let data = await response.json();
        let curLocation = data.find(x => x.name == input.value);

        showToday(curLocation.code);
        showForThreeDays(curLocation.code);
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

    async function showForThreeDays(code) {
        let response = await fetch(threeDaysURL + code);
        let data = await response.json();

        let div = document.createElement('div');
        div.classList.add('forecast-info');

        let span1 = createSection(data.forecast[0]);
        let span2 = createSection(data.forecast[1]);
        let span3 = createSection(data.forecast[2]);

        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(span3);

        upcomingForecast.appendChild(div);
    }

    function createSection(obj) {
        let upcomingSpan = document.createElement('span');
        upcomingSpan.classList.add('upcoming');

        let conditionSymbol = document.createElement('span');
        conditionSymbol.innerHTML = symbol(obj.condition);
        conditionSymbol.classList.add('symbol');

        let degrees = document.createElement('span');
        degrees.textContent = `${obj.low}°/${obj.high}°`;
        degrees.classList.add('forecast-data');

        let weather = document.createElement('span');
        weather.textContent = obj.condition;
        weather.classList.add('forecast-data');

        upcomingSpan.appendChild(conditionSymbol);
        upcomingSpan.appendChild(degrees);
        upcomingSpan.appendChild(weather);

        return upcomingSpan;
    }
}

attachEvents();
