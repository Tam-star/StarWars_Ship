const planet_container=document.getElementById("planet_container");
const planet_name = document.getElementById("planet_name");
const planet_climate = document.getElementById("planet_climate");
const planet_diameter = document.getElementById("planet_diameter");
const planet_orbital_p= document.getElementById("planet_orbital_p");
const planet_rotation_p= document.getElementById("planet_rotation_p");
const planet_population= document.getElementById("planet_pop");

const arrows = document.getElementsByClassName("slick-arrow");

let planet_id = 1;

function getPlanet(id){
    const url = 'https://swapi.dev/api/planets/'+id;
    const options={
        method : 'GET', 
        headers : {
          Accept: 'application/json', 
          'Content-type' : 'application/json'}
      }
    fetch(url, options)
     .then(reponse => reponse.json())
      .then(data=>{
        planet_name.textContent=JSON.stringify(data.name).replaceAll('"','');
        planet_climate.textContent=JSON.stringify(data.climate).replaceAll('"','');
        planet_diameter.textContent=JSON.stringify(data.diameter).replaceAll('"','');
        planet_orbital_p.textContent=JSON.stringify(data.orbital_period).replaceAll('"','');
        planet_rotation_p.textContent=JSON.stringify(data.rotation_period).replaceAll('"','');
        planet_population.textContent=JSON.stringify(data.population).replaceAll('"','');
    })   
    .catch(err =>console.log("Il y a erreur", err))
    .catch(err =>console.log("Il y a erreur json", err))
   }



function randomPlanet(){
    // Returns a random integer from 1 to 60:
   return Math.floor(Math.random() * 60) + 1;
}


//PREVIOUS ARROW
arrows[0].addEventListener("click", function(){ 
  if(planet_id==1){
    planet_id=60;
  }
  else{
    planet_id-=1;
  }
  planet_container.classList.add('container_animation');
  setTimeout(function(){
    getPlanet(planet_id);
  }, 750);
  setTimeout(function(){
    planet_container.classList.remove('container_animation');
  }, 1500);
});

//NEXT
arrows[1].addEventListener("click", function(){ 
  if(planet_id==60){
    planet_id=1;
  }
  else{
    planet_id+=1;
  }
  planet_container.classList.add('container_animation');
  setTimeout(function(){
    getPlanet(planet_id);
  }, 750);
  setTimeout(function(){
    planet_container.classList.remove('container_animation');
  }, 1500);
 });

getPlanet(planet_id);

function getPlanetImage(){
  // const url = 'https://starwars.fandom.com/wiki/Tatooine?file=Tatooine_TPM.png';
  // const options={
  //     method : 'GET', 
  //     headers : {
  //       Accept: 'application/json', 
  //       'Content-type' : 'application/json'}
  //   }
  fetch('https://starwars.fandom.com/wiki/Tatooine?file=Tatooine_TPM.png')
   .then(reponse => {

    var img = document.createElement('img');
    img.src = reponse;
    document.getElementById('body').appendChild(img);

    })   
  .catch(err =>console.log("Il y a erreur", err))
 }

getPlanetImage();