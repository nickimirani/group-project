let enemy1;
let enemy2;
let enemy3;
let enemy4;

let snakePositionX = 230;
let snakePositionY = 255;
let stevePositionX= 235;
let stevePositionY= 125;

let speed = 6;

let angle = 0;
let changeDirection = false;

/*let x = 230;
let y = 280;*/

let score = 0;

let ding;
let coinsound;


/*let coins=[coin(55,60),coin(55,100),coin(55,140),coin(85,60),coin(85,100),coin(85,140),coin(120,60),coin(160,60),coin(150,120),coin(150,160),coin(200,60),
coin(200,120),coin(235,60),coin(235,160),coin(235,200),coin(270,60),coin(270,160),coin(270,200),coin(300,60),coin(300,120),coin(445,60),coin(445,100),coin(445,140),
coin(415,60),coin(415,100),coin(415,140),coin(380,60),coin(340,60),coin(350,120),coin(350,160),coin(55,200),coin(55,250),coin(55,360),coin(55,410),
coin(85,200),coin(85,250),coin(85,360),coin(85,410),coin(150,200),coin(150,240),coin(150,280),coin(150,330),coin(150,370),coin(150,410),coin(235,245),
coin(235,285),coin(235,325),coin(235,365),coin(270,245),coin(270,285),coin(270,325),coin(270,365),coin(445,200),coin(445,250),coin(445,360),coin(445,410),
coin(415,200),coin(415,250),coin(415,360),coin(415,410),coin(350,200),coin(350,240),coin(350,280),coin(350,330),coin(350,370),coin(350,410),coin(55,470),
coin(55,505),coin(55,540),coin(55,575),coin(85,470),coin(85,505),coin(85,540),coin(85,575),coin(150,450),coin(150,490),coin(120,540),coin(120,575),coin(160,540),coin(160,575),
coin(200,410),coin(200,490),coin(200,540),coin(200,575),coin(235,410),coin(235,450),coin(235,490),coin(270,410),coin(270,450),coin(270,490),coin(300,410),
coin(300,490),coin(300,540),coin(300,575),coin(445,470),coin(445,505),coin(445,540),coin(445,575),coin(415,470),coin(415,505),coin(415,540),coin(415,575),coin(350,450),
coin(350,490),coin(380,540),coin(380,575),coin(340,540),coin(340,575)]*/

//let bigcoins=[Bigcoin(70,305),Bigcoin(430,305),Bigcoin(250,555)];

let bigCoins = [];

let bigCoin1;
let bigCoin2;
let bigCoin3;
let bigCoin4;



function preload(){

}

function setup(){

  createCanvas(500,650);
  // 500 650
  frameRate(speed); 
  //coinsound = loadSound('mixkit-space-coin-win-notification-271.wav');
  
//ding = loadSound('assets/coinsound.mp3');
}

function draw(){

    background(0,0,0);

   
    //snakes
    class Enemies{
    
        constructor(snakePositionX,snakePositionY){
          this.x = snakePositionX;
          this.y = snakePositionY;
          /*this.directionX = random(-36,36);
          this.directionY = random(-36,36);*/
          
        }

    //snakes movement
    move(){
        /*this.x = this.x + random(50, -50);
        this.y = this.y + random(50, -50);*/
        /*this.x = this.x + Math.floor(Math.random()*36);
        this.y = this.y + Math.floor(Math.random()*36);*/

         //possible squares to move on
   // const directions =  [-1, +1, width, -width];
    //let direction = directions[Math.floor(Math.random() * directions.length)];

   /* this.x = this.x + this.directionX; 
    this.y = this.y + this.directionY;
    
        if (this.x < 0){
            this.directionX = this.directionX * -1; 
           }
             
           if (this.x > width){
            this.directionX = this.directionX * -1; 
           }
             if (this.y < 0){
            this.directionY = this.directionY * -1; 
           }
             
           if (this.y > width){
            this.directionY = this.directionY * -1; 
           }*/
 
        

    }

    move1(){

        this.x = snakePositionX += speed;
       
    }
    
    //drawing snakes
    show() {
        
        strokeWeight(4);
        fill(0,255,0);
        rect(this.x, this.y, 30,30);
    }
    }

//snake positions
enemy1 = new Enemies(268,340);
enemy2 = new Enemies(196,340);
enemy3 = new Enemies(196,270);
enemy4 = new Enemies(268,270);

    
    enemy1.move1();
    enemy1.show();
    enemy2.move();
    enemy2.show();
    enemy3.move();
    enemy3.show();
    enemy4.move();
    enemy4.show();




    //snake positions
    /*snake1(snakePositionX, snakePositionY);
    snake2(snakePositionX, snakePositionY);
    snake3(snakePositionX, snakePositionY);
    snake4(400, 300);*/
    
    
    //steve start position
    steve(stevePositionX,stevePositionY); 
    
    
    //steve movement
    //36 - snaps to grid
    if (keyCode === LEFT_ARROW) {
        stevePositionX -= 36;
        
    }else if (keyCode === RIGHT_ARROW) {
       stevePositionX += 36;
    }
    
    if (keyCode === UP_ARROW) {
        stevePositionY -= 36;

    }else if (keyCode === DOWN_ARROW) {
        stevePositionY += 36;
    } 


   
    //so steve & snakes doesn't move outside of the canvas

    if(stevePositionX < 55){
        stevePositionX = 55;
    }
    if(snakePositionX < 55){
        snakePositionX = 55;
    }
    if(stevePositionX > 455){
        stevePositionX = 455;
    }
    if(snakePositionX > 445){
        snakePositionX = 445;
    }
    if(stevePositionY < 50){
        stevePositionY = 50;
    }
    if(snakePositionY < 60){
        snakePositionY = 60;
    }
    if(stevePositionY > 590){
        stevePositionY = 590;
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

    //if player and snake collide / game over

    if (snakePositionX === stevePositionX && snakePositionY === stevePositionY){
        console.log("collision");
    }

   
    //grid
  for (var i = 0; i < width; i+= 36){
    stroke(0,0,100);
    line (i, 0, i, height );
    line (width, i, 0, i );
  }
    
    
   //game fence
   noFill();
   stroke(0,0,255);
   strokeWeight(4);
   beginShape();
   vertex(36, 30);
   vertex(470, 30);
   vertex(470, 610);
   vertex(36, 610);
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

   
   // coin NW corner
   coin(55,60);
   coin(55,100);
   coin(55,140);
   coin(85,60);
   coin(85,100);
   coin(85,140);
   coin(120,60);
   coin(160,60);
   coin(150,120);
   coin(150,160);
   
   // coin North
   coin(200,60);
   coin(200,120);
   coin(235,60);
   coin(235,160);
   coin(235,200);
   coin(270,60);
   coin(270,160);
   coin(270,200);
   coin(300,60);
   coin(300,120);
  
   // coin NE corner
   coin(445,60);
   coin(445,100);
   coin(445,140);
   coin(415,60);
   coin(415,100);
   coin(415,140);
   coin(380,60);
   coin(340,60);
   coin(350,120);
   coin(350,160);
  
   // coin West
   coin(55,200);
   coin(55,250);
   coin(55,360);
   coin(55,410);
   coin(85,200);
   coin(85,250);
   coin(85,360);
   coin(85,410);
   coin(150,200);
   coin(150,240);
   coin(150,280);
   coin(150,330);
   coin(150,370);
   coin(150,410);
  
   // coin Center
   coin(235,245);
   coin(235,285);
   coin(235,325);
   coin(235,365);
   coin(270,245);
   coin(270,285);
   coin(270,325);
   coin(270,365);
  
   // coin Eest
   coin(445,200);
   coin(445,250);
   coin(445,360);
   coin(445,410);
   coin(415,200);
   coin(415,250);
   coin(415,360);
   coin(415,410);
   coin(350,200);
   coin(350,240);
   coin(350,280);
   coin(350,330);
   coin(350,370);
   coin(350,410);
  
   // coin SW corner
   coin(55,470);
   coin(55,505);
   coin(55,540);
   coin(55,575);
   coin(85,470);
   coin(85,505);
   coin(85,540);
   coin(85,575);
   coin(150,450);
   coin(150,490);
   coin(120,540);
   coin(120,575);
   coin(160,540);
   coin(160,575);
  
   // coin South
   coin(200,410);
   coin(200,490);
   coin(200,540);
   coin(200,575);
   coin(235,410);
   coin(235,450);
   coin(235,490);
   coin(270,410);
   coin(270,450);
   coin(270,490);
   coin(300,410);
   coin(300,490);
   coin(300,540);
   coin(300,575);
  
   // coin SE corner
   coin(445,470);
   coin(445,505);
   coin(445,540);
   coin(445,575);
   coin(415,470);
   coin(415,505);
   coin(415,540);
   coin(415,575);
   coin(350,450);
   coin(350,490);
   coin(380,540);
   coin(380,575);
   coin(340,540);
   coin(340,575);
   

  
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

    //  Big coin 
   Bigcoin(70,305);
    Bigcoin(430,305);
    Bigcoin(250,555);


   //when steve collects the bigger coins
   if (stevePositionX === 70 && stevePositionY === 305) {
    //speed
    score++;
    document.getElementById("score").innerHTML = "SCORE: " + score;
    coinsound.play();
    console.log("yay");
}

if (stevePositionX === 430 && stevePositionY === 305) {
    score++;
    document.getElementById("score").innerHTML = "SCORE: " + score;
    coinsound.play();
    console.log("yay2");  
}
if (stevePositionX === 250 && stevePositionY === 555) {
    score++;
    document.getElementById("score").innerHTML = "SCORE: " + score;
    coinsound.play();
    console.log("yay3");
}

}


//player
function steve(x,y){
    //strokeWeight(1);
    //stroke(51);
    rectMode(CENTER);
    fill(255,255, 0);
    //rect(x,y,30, 30,10);
   rect(x,y,25,25,10);
}


//snake1
/*function snake1(x, y){
    //push();
    //rotate(angle);
    strokeWeight(0);
    fill(0, 255 , 0);
    //rect(x,y,50, 20);
    rect(x,y,30, 30);
    //pop();
    
}

//snake2
function snake2(x,y){
    strokeWeight(0);
    fill(255,0,0);
    //rect(x,y,50, 20);
    rect(x,y,30, 30);
}
//snake3
function snake3(x,y){
    strokeWeight(0);
    fill(255 , 100 , 255);
    //rect(x,y,50, 20);
    rect(x,y,30, 30);
}
//snake4
function snake4(x,y){
    strokeWeight(0);
    fill(0 , 0 , 255);
    //rect(x,y,50, 20);
    rect(x,y,30, 30);
}*/


//coin
function coin(x,y){
    noStroke();
    fill(255 ,182, 0);
    ellipse(x,y,10,10);
}

//Bigcion
function Bigcoin(x,y){

    fill(255 ,215, 0);
    ellipse(x,y,15,15);

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








