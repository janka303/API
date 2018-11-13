var character;
var rickMortyCharacters;
function preload() {
  // Get the most recent earthquake in the database
  picker = random(396);
  pick = picker.toFixed(0);
 

  var url = 'https://rickandmortyapi.com/api/character/' + pick;
  rickMortyCharacters = loadJSON(url);


  // console.log(rickMortyCharacters["image"]);
  // character = loadImage(rickMortyCharacters.image);
}

function setup() {
  noLoop();
  console.log(rickMortyCharacters);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  //var rick = rickMortyCharacters["0"];
  
  textSize(40);
  textAlign(CENTER,CENTER);

  if(rickMortyCharacters.status === "Alive"){
    fill(0,255,0);
    ellipse(width/2, height/2 - 100, 50, 50);
  }

  if(rickMortyCharacters.status === "Dead"){
    fill(255, 0, 0);
    ellipse(width/2, height/2 - 100, 50, 50);
  }

  if(rickMortyCharacters.status === "unknown"){
    fill(0, 0, 100);
    ellipse(width/2, height/2 - 100, 50, 50);
  }


  text("Find out if they are alive!", width/2, height/2 - 250);
  text(rickMortyCharacters.name, width/2, height/2 - 200);
  text("Specie: " +rickMortyCharacters.species, width/2, height/2);
  text("Gender: " +rickMortyCharacters.gender, width/2, height/2 + 100);
  text("Origin: " + rickMortyCharacters.origin.name, width/2, height/2 + 200);
  textSize(20);
  // loadImage(rickMortyCharacters.image);
  text("REFRESH PAGE FOR NEXT", width/2, height/2 + 250);

  if(mouseIsPressed){
    redraw();
  }
}