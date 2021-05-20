let enemy1;
let enemy2;
let enemy3;
let enemy4;

let snakePositionX = 230;
let snakePositionY = 255;
let stevePositionX= 250;
let stevePositionY= 155;

let coinSize=10;
let bigcoinSize=15;
let steveSize=20;

let speed = 10;
let changeDirection = false;

let score = 0;
//initial level
let level = 1;

let ding;
let coinsound;
let bigCoinSound;

let coins=[];
let bigCoins = [];

function preload(){

}

function setup(){

  createCanvas(500,650);
  // 500 650
  frameRate(speed); 
  coinsound = loadSound('mixkit-space-coin-win-notification-271.wav');
  bigCoinSound = loadSound('mixkit-unlock-game-notification-253.wav');
  
  //ding = loadSound('assets/coinsound.mp3');

  //create small coins
  for(var i = 0; i < 10; i++) {
    for(var j = 0; j < 14; j++) {
      coins.push(new coin(70+i*40,70+j*40));
    }
   }

  //create big coins
  for(var a=0; a<2;a++){
    for(var b=0 ; b<2; b++){
      bigCoins.push(new Bigcoin(70+a*360,70+b*520));
    }
  }
}

function draw(){

    background(0,0,0);

    //When player collects small coins
    for(var i = 0; i < coins.length; i++) {
        coins[i].display();
        var distance1 = dist(coins[i].x,coins[i].y,stevePositionX,stevePositionY);
        var radius1 = steveSize/2 + coinSize/2;
        if(distance1 < radius1) {
          coins.splice(i,1);
          coinsound.play();
          score++;
          document.getElementById("score").innerHTML = "SCORE: " + score;
          
        }
      }
      
    //When player collects big coins
    for(var a = 0; a < bigCoins.length; a++) {
        bigCoins[a].display();
        var distance2 = dist(bigCoins[a].x,bigCoins[a].y,stevePositionX,stevePositionY);
        var radius2 = steveSize/2 + bigcoinSize/2;
        if(distance2 < radius2) {
           bigCoins.splice(a,1);
           bigCoinSound.play();
           score++;
           document.getElementById("score").innerHTML = "SCORE: " + score;
           console.log("yay");
    }
  } 


 //snakes
 class Enemies{
    
    constructor(snakePositionX, snakePositionY){
      
      this.x = snakePositionX;
      this.y = snakePositionY;

      //this.x = random(width);
      //this.y = random(height);
      //this.xSpeed = random(-1,1);
      //this.ySpeed = random(-1,1);
     
    }

//snakes movement
move(){
    /*this.x = this.x + random(50, -50);
    this.y = this.y + random(50, -50);*/
/*this.x = this.x + this.directionX; 
this.y = this.y + this.directionY;*/

  /*this.x = this.x + this.xSpeed; 
this.y = this.y + this.ySpeed;

if (this.x < 0){
this.xSpeed = this.xSpeed  -1; 
}

if (this.x > width){
this.xSpeed = this.xSpeed  -1; 
}
if (this.y < 0){
this.ySpeed = this.ySpeed  -1; 
}

if (this.y > width){
this.ySpeed = this.ySpeed  -1; 
}*/

this.x = snakePositionX + 1;


}

//drawing snakes
show() {
    
    strokeWeight(4);
    fill(0,255,0);
    rect(this.x, this.y, 20,20);
}
}

//snake positions
enemy1 = new Enemies(268,340);
enemy2 = new Enemies(196,340);
enemy3 = new Enemies(196,270);
enemy4 = new Enemies(268,270);

    
    enemy1.move();
    enemy1.show();
    enemy2.move();
    enemy2.show();
    enemy3.move();
    enemy3.show();
    enemy4.move();
    enemy4.show();
    
    
    //steve start position
    steve(stevePositionX,stevePositionY); 
    
    
    //steve movement
    //36 - snaps to grid
    if (keyCode === LEFT_ARROW) {
        stevePositionX -= 5;
        
    }else if (keyCode === RIGHT_ARROW) {
       stevePositionX += 5;
    }
    
    if (keyCode === UP_ARROW) {
        stevePositionY -= 5;

    }else if (keyCode === DOWN_ARROW) {
        stevePositionY += 5;
    } 


     //Level goes up if all 144 coins are collected
     if(score == 144 ){
    //plus 2 because the first level is considered 0
    document.getElementById("level").innerHTML = "LEVEL: " + 2;
}


   
    //so steve & snakes doesn't move outside of the canvas

    if(stevePositionX < 60){
        stevePositionX = 60;
    }
    if(snakePositionX < 60){
        snakePositionX = 60;
    }
    if(stevePositionX > 445){
        stevePositionX = 445;
    }
    if(snakePositionX > 445){
        snakePositionX = 445;
    }
    if(stevePositionY < 60){
        stevePositionY = 60;
    }
    if(snakePositionY < 60){
        snakePositionY = 60;
    }
    if(stevePositionY > 600){
        stevePositionY = 600;
    }
    if(snakePositionY > 575){
        snakePositionY = 575;
    }

    //Make sure player does not go through the walls(horizontal line)
    //First horizontal line
    if(stevePositionX<100 && stevePositionY>140 && stevePositionY<170){
        stevePositionY=140;
    }
    if(stevePositionX<120 && stevePositionY==170){
        stevePositionX=120;
    }
    if(stevePositionX<100 && stevePositionY<200 && stevePositionY>170){
        stevePositionY=200;
    }
    //Second horizontal line
    if(stevePositionX>400 && stevePositionY>140 && stevePositionY<170){
        stevePositionY=140;
    }
    if(stevePositionX>380 && stevePositionY==170){
        stevePositionX=380;
    }
    if(stevePositionX>400 && stevePositionY<200 && stevePositionY>170){
        stevePositionY=200;
    }
    //Third horizontal line 
    if(stevePositionX<100 && stevePositionY>410 && stevePositionY<440){
        stevePositionY=410;
    }
    if(stevePositionX<120 && stevePositionY==440){
        stevePositionX=120;
    }
    if(stevePositionX<100 && stevePositionY<470 && stevePositionY>440){
        stevePositionY=470;
    }
    //Fourth horizontal line
    if(stevePositionX>400 && stevePositionY>410 && stevePositionY<440){
        stevePositionY=410;
    }
    if(stevePositionX>380 && stevePositionY==440){
        stevePositionX=380;
    }
    if(stevePositionX>400 && stevePositionY<470 && stevePositionY>440){
        stevePositionY=470;
    }

    //Make sure player does not go through the walls(short vertical line)
    //First short vertical line
    if(stevePositionX>180 && stevePositionX<200 && stevePositionY>150 && stevePositionY<180){
        stevePositionX=180;
    }
    if(stevePositionX>200 && stevePositionX<220 && stevePositionY>150 && stevePositionY<180){
        stevePositionX=220;
    }
    if(stevePositionX>180 && stevePositionX<220 && stevePositionY>130 && stevePositionY<150){
        stevePositionY=130;
    }
    if(stevePositionX>180 && stevePositionX<220 && stevePositionY<200 && stevePositionY>180){
        stevePositionY=200;
    }
    //Second short vertical line
    if(stevePositionX>280 && stevePositionX<300 && stevePositionY>150 && stevePositionY<180){
        stevePositionX=280;
    }
    if(stevePositionX>300 && stevePositionX<320 && stevePositionY>150 && stevePositionY<180){
        stevePositionX=320;
    }
    if(stevePositionX>280 && stevePositionX<320 && stevePositionY>130 && stevePositionY<150){
        stevePositionY=130;
    }
    if(stevePositionX>280 && stevePositionX<320 && stevePositionY<200 && stevePositionY>180){
        stevePositionY=200;
    }
    //Third short vertical line
    if(stevePositionX>180 && stevePositionX<200 && stevePositionY>440 && stevePositionY<470){
        stevePositionX=180;
    }
    if(stevePositionX>200 && stevePositionX<220 && stevePositionY>440 && stevePositionY<470){
        stevePositionX=220;
    }
    if(stevePositionX>180 && stevePositionX<220 && stevePositionY>420 && stevePositionY<440){
        stevePositionY=420;
    }
    if(stevePositionX>180 && stevePositionX<220 && stevePositionY<490 && stevePositionY>470){
        stevePositionY=490;
    }
    //Fourth short vertical line
    if(stevePositionX>280 && stevePositionX<300 && stevePositionY>440 && stevePositionY<470){
        stevePositionX=280;
    }
    if(stevePositionX>300 && stevePositionX<320 && stevePositionY>440 && stevePositionY<470){
        stevePositionX=320;
    }
    if(stevePositionX>280 && stevePositionX<320 && stevePositionY>420 && stevePositionY<440){
        stevePositionY=420;
    }
    if(stevePositionX>280 && stevePositionX<320 && stevePositionY<490 && stevePositionY>470){
        stevePositionY=490;
    }

    //Make sure player does not go through the walls(long vertical line)
    //First long vertical line
    if(stevePositionX>90 && stevePositionX<110 && stevePositionY>220 && stevePositionY<390){
        stevePositionX=90;
    }
    if(stevePositionX>110 && stevePositionX<130 && stevePositionY>220 && stevePositionY<390){
        stevePositionX=130;
    }
    if(stevePositionX>90 && stevePositionX<130 && stevePositionY>200 && stevePositionY<220){
        stevePositionY=200;
    }
    if(stevePositionX>90 && stevePositionX<130 && stevePositionY<410 && stevePositionY>390){
        stevePositionY=410;
    }
    //Second long vertical line
    if(stevePositionX>370 && stevePositionX<390 && stevePositionY>220 && stevePositionY<390){
        stevePositionX=370;
    }
    if(stevePositionX>390 && stevePositionX<410 && stevePositionY>220 && stevePositionY<390){
        stevePositionX=410;
    }
    if(stevePositionX>370 && stevePositionX<410 && stevePositionY>200 && stevePositionY<220){
        stevePositionY=200;
    }
    if(stevePositionX>370 && stevePositionX<410 && stevePositionY<410 && stevePositionY>390){
        stevePositionY=410;
    }

    // //Make sure player does not go through the walls("L"shape)
    //First "L"shape
    if(stevePositionX>90 && stevePositionX<110 && stevePositionY>90 && stevePositionY<110){
        stevePositionX=90;
    }
    if(stevePositionX>110 && stevePositionX<130 && stevePositionY>90 && stevePositionY<110){
        stevePositionX=130;
    }
    if(stevePositionX>90 && stevePositionX<130 && stevePositionY<130 && stevePositionY>110){
        stevePositionY=130;
    }
    if(stevePositionX>110 && stevePositionX<180 && stevePositionY>70 && stevePositionY<95){
        stevePositionY=70;
    }
    if(stevePositionX>170 && stevePositionX<190 && stevePositionY==90){
        stevePositionX=190;
    }
    if(stevePositionX>110 && stevePositionX<180 && stevePositionY>95 && stevePositionY<120){
        stevePositionY=120;
    }
    //Second "L"shape
    if(stevePositionX>90 && stevePositionX<110 && stevePositionY>500 && stevePositionY<520){
        stevePositionX=90;
    }
    if(stevePositionX>110 && stevePositionX<130 && stevePositionY>500 && stevePositionY<520){
        stevePositionX=130;
    }
    if(stevePositionX>90 && stevePositionX<130 && stevePositionY<500 && stevePositionY>480){
        stevePositionY=480;
    }
    if(stevePositionX>110 && stevePositionX<180 && stevePositionY>495 && stevePositionY<520){
        stevePositionY=495;
    }
    if(stevePositionX>170 && stevePositionX<190 && stevePositionY==520){
        stevePositionX=190;
    }
    if(stevePositionX>110 && stevePositionX<180 && stevePositionY>520 && stevePositionY<540){
        stevePositionY=540;
    }
    //Third "L"shape
    if(stevePositionX>370 && stevePositionX<390 && stevePositionY>90 && stevePositionY<110){
        stevePositionX=370;
    }
    if(stevePositionX>390 && stevePositionX<410 && stevePositionY>90 && stevePositionY<110){
        stevePositionX=410;
    }
    if(stevePositionX>370 && stevePositionX<410 && stevePositionY<130 && stevePositionY>110){
        stevePositionY=130;
    }
    if(stevePositionX>320 && stevePositionX<390 && stevePositionY>70 && stevePositionY<95){
        stevePositionY=70;
    }
    if(stevePositionX>310 && stevePositionX<330 && stevePositionY==90){
        stevePositionX=310;
    }
    if(stevePositionX>320 && stevePositionX<390 && stevePositionY>95 && stevePositionY<120){
        stevePositionY=120;
    }
    //Forth "L" shape
    if(stevePositionX>370 && stevePositionX<390 && stevePositionY>500 && stevePositionY<520){
        stevePositionX=370;
    }
    if(stevePositionX>390 && stevePositionX<410 && stevePositionY>500 && stevePositionY<520){
        stevePositionX=410;
    }
    if(stevePositionX>370 && stevePositionX<410 && stevePositionY<500 && stevePositionY>480){
        stevePositionY=480;
    }
    if(stevePositionX>320 && stevePositionX<390 && stevePositionY>495 && stevePositionY<520){
        stevePositionY=495;
    }
    if(stevePositionX>310 && stevePositionX<330 && stevePositionY==520){
        stevePositionX=310;
    }
    if(stevePositionX>320 && stevePositionX<390 && stevePositionY>520 && stevePositionY<540){
        stevePositionY=540;
    }
    //"C"shape wall
    if(stevePositionX>190 && stevePositionX<310 && stevePositionY>200 && stevePositionY<220){
        stevePositionY=200;
    }
    if(stevePositionX>190 && stevePositionX<310 && stevePositionY>220 && stevePositionY<240){
        stevePositionY=240;
    }
    if(stevePositionX>190 && stevePositionX<310 && stevePositionY>370 && stevePositionY<390){
        stevePositionY=370;
    }
    if(stevePositionX>190 && stevePositionX<310 && stevePositionY>390 && stevePositionY<410){
        stevePositionY=410;
    }
    if(stevePositionX>180 && stevePositionX<200 && stevePositionY>220 && stevePositionY<390){
        stevePositionX=180;
    }
    if(stevePositionX>200 && stevePositionX<220 && stevePositionY>220 && stevePositionY<390){
        stevePositionX=220;
    }
    if(stevePositionX>280 && stevePositionX<300 && stevePositionY>220 && stevePositionY<250){
        stevePositionX=280;
    }
    if(stevePositionX>300 && stevePositionX<320 && stevePositionY>220 && stevePositionY<250){
        stevePositionX=320;
    }
    if(stevePositionX>280 && stevePositionX<300 && stevePositionY>360 && stevePositionY<390){
        stevePositionX=280;
    }
    if(stevePositionX>300 && stevePositionX<320 && stevePositionY>360 && stevePositionY<390){
        stevePositionX=320;
    }
    if(stevePositionX>280 && stevePositionX<320 && stevePositionY>250 && stevePositionY<270){
        stevePositionY=270;
    }
    if(stevePositionX>280 && stevePositionX<320 && stevePositionY>340 && stevePositionY<360){
        stevePositionY=340;
    }
    

    //if player and snake collide / game over

    if (snakePositionX === stevePositionX && snakePositionY === stevePositionY){
        console.log("collision");
    }


    
   //game fence
   noFill();
   stroke(0,0,255);
   strokeWeight(4);
   beginShape();
   vertex(50, 45);
   vertex(460, 45);
   vertex(460, 610);
   vertex(50, 610);
   endShape(CLOSE);
   
   
   //"horizontal line"wall
   strokeWeight(4);
   line(36,170,106,170);
   line(400,170,470,170);
   line(36,440,106,440);
   line(400,440,470,440);

   //short vertical line wall
   line(200,150,200,180);
   line(300,150,300,180);
   line(200,440,200,470);  
   line(300,440,300,470);

   //long vertical line wall
   line(110,220,110,390);
   line(390,220,390,390);
   
   
   // "L"shape wall
   noFill();
   beginShape();
   vertex(110,110);
   vertex(110,90);
   vertex(170,90);
   endShape();
  
   noFill();
   beginShape();
   vertex(390,110);
   vertex(390,90);
   vertex(330,90);
   endShape();
  
   noFill();
   beginShape();
   vertex(110,500);
   vertex(110,520);
   vertex(170,520);
   endShape();
   
   noFill();
   beginShape();
   vertex(390,500);
   vertex(390,520);
   vertex(330,520);
   endShape();
  
   // "C"shape wall
   noFill();
   beginShape();
   vertex(290,360);
   vertex(290,390);
   vertex(180,390);
   vertex(180,220);
   vertex(290,220);
   vertex(290,250);
   endShape();
 

   p5.prototype.collideRectCircle = function (rx, ry, rw, rh, cx, cy, diameter) {

  var testX = cx;
  var testY = cy;

 
  if (cx < rx){         testX = rx;       // left edge
  }else if (cx > rx+rw){ testX = rx+rw;  }  // right edge

  if (cy < ry){         testY = ry;       // top edge
  }else if (cy > ry+rh){ testY = ry+rh; }   // bottom edge

  // // get distance from closest edges
  var distance = this.dist(cx,cy,testX,testY);

  // if the distance is less than the radius, collision!
  if (distance <= diameter/2) {
    
    ding.play();
  }

};


}
//I put this down here because it's here where functions are
//Gameover(check the hit box about steve and snake)
function collideRectRect(stevePositionX, stevePositionY, w, h, snakePositionX, snakePositionY, w2, h2) {
    if ( 
       stevePositionX + w >= snakePositionX &&    
        // r1 right edge past r2 left
       stevePositionX <= snakePositionX + w2 &&    
        // r1 left edge past r2 right
       stevePositionY + h >= snakePositionY &&    
        // r1 top edge past r2 bottom
       stevePositionY <= snakePositionY + h2)     
        // r1 bottom edge past r2 top   
   {    
        
       redraw();
    }
}


//player
function steve(x,y){
    //strokeWeight(1);
    //stroke(51);
    rectMode(CENTER);
    fill(255,255, 0);
    //rect(x,y,30, 30,10);
   rect(x,y,20,20,7);
}


//coin
class coin {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.display = function () {
            noStroke();
            fill(255, 182, 0);
            ellipse(x, y, coinSize);
        };
    }
}

//Bigcion
class Bigcoin {
    constructor(x, y) {

        this.x = x;
        this.y = y;

        this.display = function () {
            noStroke();
            fill(255, 215, 0);
            ellipse(x, y, bigcoinSize);
        };

    }
}

/*function moveSnake(enemy1,enemy2, enemy3, enemy4) {
    var directions =  [-1, +1, width, -width];
    let direction = directions[Math.floor(Math.random() * directions.length)];

    ghost.timerId = setInterval(function() {
      //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
      if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
        !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
          //remove the ghosts classes
          squares[ghost.currentIndex].classList.remove(ghost.className)
          squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
          //move into that space
          ghost.currentIndex += direction
          squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      //else find a new random direction ot go in
      } else direction = directions[Math.floor(Math.random() * directions.length)]
    }*/


    /*function Tile(x, y, type, behavior) {

        this.x = x;
        this.y = y;
        this.type = type;
      
          this.destination = (-1, -1);
        this.moving = false;
      
        this.intact = true;
      
        this.speed = 0.2;
      
        this.behavior = behavior; 
      }*/



    










