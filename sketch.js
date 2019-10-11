let PosX = 100;
let PosY = 100;

let d = 20;


let ObstacleX = 300;
let ObstacleY = 300;

let direction = 2;
let vitesse = 2;

let DistanceX = 10;
let DistanceY = 10;
let Distance = 10;

let vitesseT  = 2;

let x;
let y;
let timer;
let millissecond = millis();

let obstacleY2 = 10;

function setup() {
  createCanvas(900, 600);

}
function chronometre(){
  timer = millis() / 10;
  timer = Math.floor(timer)/ 100
  textSize(32)
  text(timer, 400,450)
}
function countSeconds() {

  secondes = Math.trunc((millis() / 1000))
}

function draw() {

  countSeconds()

  chronometre()
  strokeWeight(6);
  stroke('0');

  x = width / 2;
  y = height / 2;

  background(155);

  updatePositionEllipse();
  OutOfScreen()
  fill('white')
  DistancePlayer()
  millis()


  ellipse(PosX, PosY, 50, 50)

  fill('red')
  textSize(32);
  text(secondes, width / 2, 475)
  // ellipse(ObstacleX, 50, d, d);

  // ObstacleX += vitesse * direction;
  // if ((ObstacleX > width - d / 2) || (ObstacleX < d / 2)) {
  //   direction = -direction; // Changer de direction
    
  // }
  ellipse(ObstacleX, ObstacleY, d, d);

  ObstacleY += vitesse * direction;
  if ((ObstacleY > height - d / 2) || (ObstacleY < d / 2)) {
    direction = -direction; // Changer de direction
    
  }
  // ellipse(60, obstacleY2, d, d);



}


function updatePositionEllipse() {
  if (keyIsDown(LEFT_ARROW)) {
    PosX -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    PosX += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    PosY -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    PosY += 5;
  }
}


function OutOfScreen() {

  if (PosX > 875) {
    PosX = 875;
    strokeWeight(6);
    stroke('red');
    line(898, 0, 898, 598);


  }

  if (PosX < 25) {
    PosX = 25;
    strokeWeight(6);
    stroke('red');
    line(2, 2, 2, 598);



  }

  if (PosY < 25) {
    PosY = 25;
    strokeWeight(6);
    stroke('red');
    line(2, 2, 898, 2);

  }

  if (PosY > 575) {
    PosY = 575;
    strokeWeight(6);
    stroke('red');
    line(2, 598, 898, 598);


  }
}

function DistancePlayer() {


  DistanceX = Math.pow(PosX - ObstacleX, 2);
  DistanceY = Math.pow(PosY - ObstacleY, 2);
  Distance = Math.sqrt(DistanceX + DistanceY);


  if (Distance < 48) {
    fill('black');
    textSize(64);
    text("fin", 450, 300);
    text('score : ' + timer, 350, 350);
    gameLost();
  }
}

// function enVie() {

// }