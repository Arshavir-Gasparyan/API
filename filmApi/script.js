
let baseUrl = "https://ghibliapi.herokuapp.com/films/";
const select = document.querySelector("select");
const title = document.getElementById("title")
const description = document.getElementById("description")
const director = document.getElementById("director")
const producer = document.getElementById("producer")
const release_date = document.getElementById("release_date")
let id;
const fetchAllFilm = ()=>{
    fetch(`${baseUrl}`).then((res)=>res.json()).then((data)=>{
        for(let item of data){
            let option = document.createElement("option");
            option.innerText = item.title;
            select.appendChild(option)
               if (item.title===select.value) {
                   id = item.id
               }   
            }   
    })
}
fetchAllFilm()
const fetchOneFilm = ()=>{

    fetch(`${baseUrl}${id}`).then((res)=>res.json()).then((data)=>{
        title.innerText = data.title
        description.innerText=data.description
        director.innerText=data.director
        producer.innerText=data.producer
        release_date.innerText=data.release_date
    }) 
    fetchAllFilm();
}

select.addEventListener("change", () => {
    fetchOneFilm(id)
  });
