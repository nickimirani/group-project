let enemy1;
let enemy2;
let enemy3;
let enemy4;
let snakes = [];

let snakePositionX;
let snakePositionY;
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
let lives = 3;

let ding;
let coinsound;
let bigCoinSound;
let winSound;

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
  winSound=loadSound('the level win.wav')

  
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
  
  //snake positions
enemy1 = new Enemies(268,300);
enemy2 = new Enemies(268,330);
enemy3 = new Enemies(268,360);
enemy4 = new Enemies(268,390);

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
          //score goes up
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
           //score goes up
           score++;
           document.getElementById("score").innerHTML = "SCORE: " + score;
    }
  } 

    
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
    winSound.play();
    score=0;
    document.getElementById("score").innerHTML="SCORE: "+score;
}


   
    //so steve doesn't move outside of the canvas

    if(stevePositionX < 60){
        stevePositionX = 60;
    }
    if(stevePositionX > 440){
        stevePositionX = 440;
    }
    if(stevePositionY < 55){
        stevePositionY = 55;
    }
    if(stevePositionY > 600){
        stevePositionY = 600;
    }


    //Make sure player does not go through the walls(horizontal line)
    //First horizontal line
    if(stevePositionX<120 && stevePositionY>160 && stevePositionY<170){
        stevePositionY=160;
    }
    if(stevePositionX<130 && stevePositionY==170){
        stevePositionX=130;
    }
    if(stevePositionX<120 && stevePositionY<180 && stevePositionY>170){
        stevePositionY=180;
    }
    //Second horizontal line
    if(stevePositionX>380 && stevePositionY>160 && stevePositionY<170){
        stevePositionY=160;
    }
    if(stevePositionX>370 && stevePositionY==170){
        stevePositionX=370;
    }
    if(stevePositionX>380 && stevePositionY<180 && stevePositionY>170){
        stevePositionY=180;
    }
    //Third horizontal line 
    if(stevePositionX<120 && stevePositionY>480 && stevePositionY<490){
        stevePositionY=480;
    }
    if(stevePositionX<130 && stevePositionY==490){
        stevePositionX=130;
    }
    if(stevePositionX<120 && stevePositionY<500 && stevePositionY>490){
        stevePositionY=500;
    }
    //Fourth horizontal line
    if(stevePositionX>380 && stevePositionY>480 && stevePositionY<490){
        stevePositionY=480;
    }
    if(stevePositionX>370 && stevePositionY==490){
        stevePositionX=370;
    }
    if(stevePositionX>380 && stevePositionY<500 && stevePositionY>490){
        stevePositionY=500;
    }

    //Make sure player does not go through the walls(short vertical line)
    //First short vertical line
    if(stevePositionX>200 && stevePositionX<210 && stevePositionY>140 && stevePositionY<170){
        stevePositionX=200;
    }
    if(stevePositionX>210 && stevePositionX<220 && stevePositionY>140 && stevePositionY<170){
        stevePositionX=220;
    }
    if(stevePositionX>200 && stevePositionX<220 && stevePositionY>130 && stevePositionY<140){
        stevePositionY=130;
    }
    if(stevePositionX>200 && stevePositionX<220 && stevePositionY<180 && stevePositionY>170){
        stevePositionY=180;
    }
    //Second short vertical line
    if(stevePositionX>280 && stevePositionX<290 && stevePositionY>140 && stevePositionY<170){
        stevePositionX=280;
    }
    if(stevePositionX>290 && stevePositionX<300 && stevePositionY>140 && stevePositionY<170){
        stevePositionX=300;
    }
    if(stevePositionX>280 && stevePositionX<300 && stevePositionY>130 && stevePositionY<140){
        stevePositionY=130;
    }
    if(stevePositionX>280 && stevePositionX<300 && stevePositionY<180 && stevePositionY>170){
        stevePositionY=180;
    }
    //Third short vertical line
    if(stevePositionX>200 && stevePositionX<210 && stevePositionY>490 && stevePositionY<520){
        stevePositionX=200;
    }
    if(stevePositionX>210 && stevePositionX<220 && stevePositionY>490 && stevePositionY<520){
        stevePositionX=220;
    }
    if(stevePositionX>200 && stevePositionX<220 && stevePositionY>480 && stevePositionY<490){
        stevePositionY=480;
    }
    if(stevePositionX>200 && stevePositionX<220 && stevePositionY<530 && stevePositionY>520){
        stevePositionY=530;
    }
    //Fourth short vertical line
    if(stevePositionX>280 && stevePositionX<290 && stevePositionY>490 && stevePositionY<520){
        stevePositionX=280;
    }
    if(stevePositionX>290 && stevePositionX<300 && stevePositionY>490 && stevePositionY<520){
        stevePositionX=300;
    }
    if(stevePositionX>280 && stevePositionX<300 && stevePositionY>480 && stevePositionY<490){
        stevePositionY=480;
    }
    if(stevePositionX>280 && stevePositionX<300 && stevePositionY<530 && stevePositionY>520){
        stevePositionY=530;
    }


    //Make sure player does not go through the walls(long vertical line)
    //First long vertical line
    if(stevePositionX>120 && stevePositionX<130 && stevePositionY>210 && stevePositionY<450){
        stevePositionX=120;
    }
    if(stevePositionX>130 && stevePositionX<140 && stevePositionY>210 && stevePositionY<450){
        stevePositionX=140;
    }
    if(stevePositionX>120 && stevePositionX<140 && stevePositionY>200 && stevePositionY<210){
        stevePositionY=200;
    }
    if(stevePositionX>120 && stevePositionX<140 && stevePositionY<460 && stevePositionY>450){
        stevePositionY=460;
    }
    //Second long vertical line
    if(stevePositionX>360 && stevePositionX<370 && stevePositionY>210 && stevePositionY<450){
        stevePositionX=360;
    }
    if(stevePositionX>370 && stevePositionX<380 && stevePositionY>210 && stevePositionY<450){
        stevePositionX=380;
    }
    if(stevePositionX>360 && stevePositionX<380 && stevePositionY>200 && stevePositionY<210){
        stevePositionY=200;
    }
    if(stevePositionX>360 && stevePositionX<380 && stevePositionY<460 && stevePositionY>450){
        stevePositionY=460;
    }


    // //Make sure player does not go through the walls("L"shape)
    //First "L"shape
    if(stevePositionX>120 && stevePositionX<130 && stevePositionY>90 && stevePositionY<120){
        stevePositionX=120;
    }
    if(stevePositionX>130 && stevePositionX<140 && stevePositionY>90 && stevePositionY<120){
        stevePositionX=140;
    }
    if(stevePositionX>120 && stevePositionX<190 && stevePositionY<90 && stevePositionY>80){
        stevePositionY=80;
    }
    if(stevePositionX>120 && stevePositionX<190 && stevePositionY>90 && stevePositionY<100){
        stevePositionY=100;
    }
    if(stevePositionX>190 && stevePositionX<200 && stevePositionY==90){
        stevePositionX=200;
    }
    if(stevePositionX>120 && stevePositionX<140 && stevePositionY>120 && stevePositionY<130){
        stevePositionY=130;
    }
    //Second "L"shape
    if(stevePositionX>120 && stevePositionX<130 && stevePositionY>540 && stevePositionY<570){
        stevePositionX=120;
    }
    if(stevePositionX>130 && stevePositionX<140 && stevePositionY>540 && stevePositionY<570){
        stevePositionX=140;
    }
    if(stevePositionX>120 && stevePositionX<190 && stevePositionY<570 && stevePositionY>560){
        stevePositionY=560;
    }
    if(stevePositionX>120 && stevePositionX<190 && stevePositionY>570 && stevePositionY<580){
        stevePositionY=580;
    }
    if(stevePositionX>190 && stevePositionX<200 && stevePositionY==570){
        stevePositionX=200;
    }
    if(stevePositionX>120 && stevePositionX<140 && stevePositionY>530 && stevePositionY<540){
        stevePositionY=530;
    }
    //Third "L"shape
    if(stevePositionX>360 && stevePositionX<370 && stevePositionY>90 && stevePositionY<120){
        stevePositionX=360;
    }
    if(stevePositionX>370 && stevePositionX<380 && stevePositionY>90 && stevePositionY<120){
        stevePositionX=380;
    }
    if(stevePositionX>310 && stevePositionX<380 && stevePositionY<90 && stevePositionY>80){
        stevePositionY=80;
    }
    if(stevePositionX>310 && stevePositionX<380 && stevePositionY>90 && stevePositionY<100){
        stevePositionY=100;
    }
    if(stevePositionX>300 && stevePositionX<310 && stevePositionY==90){
        stevePositionX=300;
    }
    if(stevePositionX>360 && stevePositionX<380 && stevePositionY>120 && stevePositionY<130){
        stevePositionY=130;
    }
    //Forth "L" shape
    if(stevePositionX>360 && stevePositionX<370 && stevePositionY>540 && stevePositionY<570){
        stevePositionX=360;
    }
    if(stevePositionX>370 && stevePositionX<380 && stevePositionY>540 && stevePositionY<570){
        stevePositionX=380;
    }
    if(stevePositionX>310 && stevePositionX<380 && stevePositionY<570 && stevePositionY>560){
        stevePositionY=560;
    }
    if(stevePositionX>310 && stevePositionX<380 && stevePositionY>570 && stevePositionY<580){
        stevePositionY=580;
    }
    if(stevePositionX>300 && stevePositionX<310 && stevePositionY==570){
        stevePositionX=300;
    }
    if(stevePositionX>360 && stevePositionX<380 && stevePositionY>530 && stevePositionY<540){
        stevePositionY=530;
    }
    //"C"shape wall
    if(stevePositionX>200 && stevePositionX<300 && stevePositionY>200 && stevePositionY<210){
        stevePositionY=200;
    }
    if(stevePositionX>200 && stevePositionX<300 && stevePositionY>210 && stevePositionY<220){
        stevePositionY=220;
    }
    if(stevePositionX>200 && stevePositionX<300 && stevePositionY>440 && stevePositionY<450){
        stevePositionY=440;
    }
    if(stevePositionX>200 && stevePositionX<300 && stevePositionY>450 && stevePositionY<460){
        stevePositionY=460;
    }
    if(stevePositionX>200 && stevePositionX<210 && stevePositionY>200 && stevePositionY<460){
        stevePositionX=200;
    }
    if(stevePositionX>210 && stevePositionX<220 && stevePositionY>200 && stevePositionY<460){
        stevePositionX=220;
    }
    if(stevePositionX>280 && stevePositionX<290 && stevePositionY>200 && stevePositionY<240){
        stevePositionX=280;
    }
    if(stevePositionX>290 && stevePositionX<300 && stevePositionY>200 && stevePositionY<240){
        stevePositionX=300;
    }
    if(stevePositionX>280 && stevePositionX<290 && stevePositionY>420 && stevePositionY<460){
        stevePositionX=280;
    }
    if(stevePositionX>290 && stevePositionX<300 && stevePositionY>420 && stevePositionY<460){
        stevePositionX=300;
    }
    if(stevePositionX>280 && stevePositionX<300 && stevePositionY>240 && stevePositionY<250){
        stevePositionY=250;
    }
    if(stevePositionX>280 && stevePositionX<300 && stevePositionY>410 && stevePositionY<420){
        stevePositionY=410;
    }
    
    
   //game fence
   noFill();
   stroke(0,0,255);
   strokeWeight(4);
   beginShape();
   vertex(50, 45);
   vertex(450, 45);
   vertex(450, 610);
   vertex(50, 610);
   endShape(CLOSE);
   
   
   //"horizontal line"wall
   strokeWeight(4);
   line(50,170,120,170);
   line(380,170,450,170);
   line(50,490,120,490);
   line(380,490,450,490);

   //short vertical line wall
   line(210,140,210,170);
   line(290,140,290,170);
   line(210,490,210,520);  
   line(290,490,290,520);

   //long vertical line wall
   line(130,210,130,450);
   line(370,210,370,450);
   
   
   // "L"shape wall
   noFill();
   beginShape();
   vertex(130,120);
   vertex(130,90);
   vertex(190,90);
   endShape();
  
   noFill();
   beginShape();
   vertex(370,120);
   vertex(370,90);
   vertex(310,90);
   endShape();
  
   noFill();
   beginShape();
   vertex(130,540);
   vertex(130,570);
   vertex(190,570);
   endShape();
   
   noFill();
   beginShape();
   vertex(370,540);
   vertex(370,570);
   vertex(310,570);
   endShape();
  
   // "C"shape wall
   noFill();
   beginShape();
   vertex(290,420);
   vertex(290,450);
   vertex(210,450);
   vertex(210,210);
   vertex(290,210);
   vertex(290,240);
   endShape();
 



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
    noStroke();
    rectMode(CENTER);
    fill(255,255, 0);
   rect(x,y,20,20,7);
}


// Object that stores positions of coins
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

// Object that stores positions of big coins
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



    //snakes
    class Enemies{
    
    constructor(snakePositionX, snakePositionY){
    
     //let directions =  [-1, +1, width, -width];
    //let direction = directions[Math.floor(Math.random() * directions.length)];
  
    this.snakePositionX = snakePositionX;
    this.snakePositionY= snakePositionY; //rätt
      
    
    this.speed = speed;
    //one version
      //this.snakePositionX = random(width);
      //this.snakePositionY = random(height);
      this.xSpeed = random(-speed,speed);
      this.ySpeed = random(-speed,speed);


      // set default properties
      /*this.snakePositionX = random(0, width);
      this.snakePositionY = 0;
      this.speed = random(1, 4);*/

         
        }
    
    //snakes movement
    move(){
    

        /*this.xPos += random(-this.speed, this.speed);
        this.yPos += random(-this.speed, this.speed);*/
    
       //this.snakePositionX = this.snakePositionX + random(-1, 1);
       
       // Moving at a constant speed
       /*this.snakePositionX = this.snakePositionX  + speed;

       if(this.snakePositionX > 305){
           this.snakePositionY = this.snakePositionY + speed;
           this.snakePositionX = this.snakePositionX  - speed;
           changeDirection = true;
       }

       if(this.snakePositionY > 500){
           this.snakePositionX = this.snakePositionX + speed;
           this.snakePositionY = this.snakePositionY  - speed;
       }*/



       //one version
    this.snakePositionX = this.snakePositionX + this.xSpeed; 
   this.snakePositionY = this.snakePositionY + this.ySpeed;

         //so snakes don't move outside of canvas
         if(this.snakePositionX < 60){
            this.xSpeed = this.xSpeed * -1; 
        }
    
           if(this.snakePositionX > 440){
            //this.snakePositionX = 440;
            this.xSpeed = this.xSpeed * -1;  
        }
        if(this.snakePositionY < 60){
            //this.snakePositionY = 60;
            this.ySpeed = this.ySpeed * -1;  
        }
        if(this.snakePositionY > 575){
            //this.snakePositionY = 575;
            this.ySpeed = this.ySpeed * -1; 
        }


        //COLLISION
        if(stevePositionX + 20 > this.snakePositionX && stevePositionX < this.snakePositionX + 20 && stevePositionY + 20 > this.snakePositionY && stevePositionY < this.snakePositionY + 20){
            console.log('bumped!');
            noLoop();
            //player loses a life
            lives--;
            document.getElementById("lives").innerHTML = "LIVES LEFT: " + lives ;
        }
        if(lives == 1){
            document.getElementById("lives").innerHTML = "LIVES LEFT: " + lives ;
        }
    
    }
    
    //drawing snakes
    show() {
        noStroke();
        rectMode(CENTER);
        fill(0,255,0);
        rect(this.snakePositionX, this.snakePositionY, 20,20);
    }
    }


    










