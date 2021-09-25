const planet_container=document.getElementById("planet_container");
const planet_name = document.getElementById("planet_name");
const planet_climate = document.getElementById("planet_climate");
const planet_diameter = document.getElementById("planet_diameter");
const planet_orbital_p= document.getElementById("planet_orbital_p");
const planet_rotation_p= document.getElementById("planet_rotation_p");
const planet_population= document.getElementById("planet_pop");
const planet_distance = document.getElementById("planet_distance");
const planet_globe = document.getElementById("planet_globe");
const arrows = document.getElementsByClassName("slick-arrow");
const window_stars = document.getElementById("window");
const red_button = document.getElementById("high_speed_button");
const tableau_de_bord = document.getElementById("tableau_de_bord");

// Get the root element
var r = document.querySelector(':root');

let planet_id = 1;

async function getPlanet(id){
  //console.log("getplanet "+Date.now());
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
        planet_distance.textContent=randomLightYears();
        
    })   
    .catch(err =>console.log("Il y a erreur", err))
    .catch(err =>console.log("Il y a erreur json", err))
    return await Promise.resolve();
   }



function randomLightYears(){
    // Returns a random integer from 1 to 5000
   return Math.floor(Math.random() * 5000) + 1;
}


//PREVIOUS ARROW
arrows[0].addEventListener("click", function(){ 
  
  if(planet_id==1){
    planet_id=60;
  }
  else{
    planet_id-=1;
  }
  planet_container.classList.add('disappear');
  console.log("add disappear"+Date.now());
  getPlanet(planet_id).then( (response) => {
      //console.log("getplanet "+Date.now());
      changePlanetColor(planet_id);
      planet_container.classList.remove('disappear');
      planet_container.classList.add('appear');
      setTimeout(function(){
        //console.log("removing appear in 1.2s  " +Date.now());
        planet_container.classList.remove('appear');
        }, 1500); //Turning off button until animation is over ???
    });
});

//NEXT ARROW
arrows[1].addEventListener("click", function(){ 
  if(planet_id==60){
    planet_id=1;
  }
  else{
    planet_id+=1;
  }
  planet_container.classList.add('disappear');
  //console.log("add disappear"+Date.now());
  getPlanet(planet_id).then( (response) => {
      changePlanetColor(planet_id);
      planet_container.classList.remove('disappear');
      planet_container.classList.add('appear');
      setTimeout(function(){
        //console.log("removing appear in 1.2s  " +Date.now());
        planet_container.classList.remove('appear');
        }, 1500); //Turning off next button until animation is over ???
    });
      
  });


getPlanet(planet_id);

function changePlanetColor(){
        switch(planet_id){
          case 1: //TATOOINE
              r.style.setProperty('--first_globe_color', '#bd592b');
              r.style.setProperty('--second_globe_color', '#b89455');
              r.style.setProperty('--third_globe_color', '#db821b');
            break;
          case 2: //ALDERAAN
              r.style.setProperty('--first_globe_color', '#3ec462');
              r.style.setProperty('--second_globe_color', '#30abff');
              r.style.setProperty('--third_globe_color', '#ffffff');
          break;
          case 3: //YAVIN IV
              r.style.setProperty('--first_globe_color', '#3ec462');
              r.style.setProperty('--second_globe_color', '#30abff');
              r.style.setProperty('--third_globe_color', '#ffffff');
          break;
          case 4: // HOTH
              r.style.setProperty('--first_globe_color', '#00ffeb');
              r.style.setProperty('--second_globe_color', '#30d8ff');
              r.style.setProperty('--third_globe_color', '#ffffff');
          break;
          case 5: // DAGOBAH
              r.style.setProperty('--first_globe_color', '#a9c4a3');
              r.style.setProperty('--second_globe_color', '#188409');
              r.style.setProperty('--third_globe_color', '#f5d3d3');
          break;
          case 6: // BESPIN
              r.style.setProperty('--first_globe_color', '#debb48');
              r.style.setProperty('--second_globe_color', '#ffed1e');
              r.style.setProperty('--third_globe_color', '#a3691d');
          break;
          case 7: // ENDOR
              r.style.setProperty('--first_globe_color', '#a9c4a3');
              r.style.setProperty('--second_globe_color', '#188409');
              r.style.setProperty('--third_globe_color', '#f5d3d3');
              break;
          case 8: // NABOO
              r.style.setProperty('--first_globe_color', '#3ec462');
              r.style.setProperty('--second_globe_color', '#30abff');
              r.style.setProperty('--third_globe_color', '#ffffff');
          break;
          case 9: // CORUSCANT
              r.style.setProperty('--first_globe_color', '#2c240e');
              r.style.setProperty('--second_globe_color', '#494232');
              r.style.setProperty('--third_globe_color', '#9e6922');
          break;
          case 10: // KAMINO
              r.style.setProperty('--first_globe_color', '#0630d0');
              r.style.setProperty('--second_globe_color', '#1881d4');
              r.style.setProperty('--third_globe_color', '#0630d0');
          break;
          default:
            r.style.setProperty('--first_globe_color', randomColor());
            r.style.setProperty('--second_globe_color', randomColor());
            r.style.setProperty('--third_globe_color', randomColor());
          break;
        }
      }


function randomColor(){
  let color = '#';
  for (let i = 0; i < 6; i++){
     let random = Math.random();
     let bit = (random * 16) | 0;
     color += (bit).toString(16);
  };
  return color;
};

function letsHyperdrive() {
  setTimeout(function(){
        location.reload();
        }, 2000);
 window_stars.classList.add('hyperdrive_animation');
 tableau_de_bord.classList.add('disappear')
 window_stars.removeChild(document.querySelector("h1"));
 document.querySelector("body").removeChild(document.getElementById("tableau_de_bord"));
 
}

red_button.addEventListener("click", function(){ 
  letsHyperdrive();
});


//STARS IN WINDOW
const mystars = document.getElementsByClassName("star");
for(let i=0;i<mystars.length;i++){
    
    let top=Math.floor(Math.random() * (340 - 40) + 40);
    console.log("TOP "+top);
    let left=Math.floor(Math.random() * (1300 - 10) + 10);
    console.log("LEFT "+left);
    mystars[i].style.setProperty('top', top+"px");
    mystars[i].style.setProperty('left', left+"px");
}

//TO DO
//I want the animation of the stars to be random