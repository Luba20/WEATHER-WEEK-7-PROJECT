function changeCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  let city = document.querySelector("#city");
  city.innerHTML = input.value;
}

let formInput = document.querySelector("#form");
formInput.addEventListener("submit", changeCity);
