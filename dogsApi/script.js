const select = document.querySelector("select");
const img = document.querySelector("img");
let baseUrl = "https://dog.ceo/api/breed/";

const fetchDogImage = (breed) => {
  fetch(`${baseUrl}${breed}/images/random`)
    .then((res) => res.json())
    .then((data) => (img.src = data.message));
};

fetchDogImage(select.value);

select.addEventListener("change", () => {
  fetchDogImage(select.value);
});
