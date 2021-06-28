let baseUrl = "https://ghibliapi.herokuapp.com/films/";
const select = document.getElementById("sel");
const title = document.getElementById("title");
const description = document.getElementById("description");
const director = document.getElementById("director");
const producer = document.getElementById("producer");
const releaseDate = document.getElementById("release_date");
let allFilmsData;

const getFilmsData = () => {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((res) => res.json())
    .then((data) => {
      allFilmsData = data;
      allFilmsData.forEach((item) => {
        let option = document.createElement("option");
        option.innerText = item.title;
        option.value = item.id;
        select.appendChild(option);
      });
    });
};
getFilmsData();

const fillFilmData = (filmData) => {
  title.innerText = filmData.title;
  description.innerText = filmData.description;
  director.innerText = filmData.director;
  producer.innerText = filmData.producer;
  releaseDate.innerText = filmData.release_date;
};

select.addEventListener("change", () => {
  let film = allFilmsData.find((item) => item.id === select.value);
  fillFilmData(film);
});

// const fetchAllFilm = () => {
//   fetch(`${baseUrl}`)
//     .then((res) => res.json())
//     .then((data) => {
//       for (let item of data) {
//         let option = document.createElement("option");
//         option.innerText = item.title;
//         select.appendChild(option);
//         // if (item.title === select.value) {
//         //   id = item.id;
//         // }
//       }
//     });
// };
// fetchAllFilm();
// const fetchOneFilm = () => {
//   title.innerText = AllFilms.title;
//   description.innerText = AllFilms.description;
//   director.innerText = AllFilms.director;
//   producer.innerText = AllFilms.producer;
//   release_date.innerText = AllFilms.release_date;

//   fetchAllFilm();
// };

// select.addEventListener("change", () => {
//   fetchOneFilm();
// });
