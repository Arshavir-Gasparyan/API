const select = document.querySelector("select");
let baseUrl = "https://restcountries.eu/rest/";
const capital = document.getElementById("capital");
const area = document.getElementById("area");
const region = document.getElementById("region");
const flag = document.querySelector("img");

const fetchAllCountries = () => {
  fetch(`${baseUrl}v2/all`)
    .then((res) => res.json())
    .then((data) => {
      for (let item of data) {
        let option = document.createElement("option");
        option.innerText = item.name;
        select.appendChild(option);
      }
    });
};
fetchAllCountries();
const fetchOneCountry = () => {
  fetch(`${baseUrl}v2/name/${select.value}`)
    .then((res) => res.json())
    .then((data) => {
      capital.innerText = `Capital: ${data[0].capital}`;
      area.innerText = `Area: ${data[0].area}`;
      region.innerText = `Region: ${data[0].region}`;
      flag.src = data[0].flag;
    });
};

select.addEventListener("change", () => {
  fetchOneCountry();
});
