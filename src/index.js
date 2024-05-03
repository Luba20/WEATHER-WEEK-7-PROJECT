function changeTemp(response) {
  let temp = document.querySelector("#temp");
  let temperature = response.data.temperature.current;

  let city = document.querySelector("#city");
  city.innerHTML = response.data.city + "🌈";
  temp.innerHTML = Math.round(temperature);
}

function findCity(city) {
  let apiKey = "b6e06o2b641ddbc9et442a295318f3fd";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(url).then(changeTemp);
}

function changeCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");

  findCity(input.value);
}

let formInput = document.querySelector("#form");
formInput.addEventListener("submit", changeCity);

findCity("Miami");
