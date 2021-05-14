

/*let snake1;
let snake2;
let snake3;
let snake4;*/

let snakePositionX = 230;
let snakePositionY = 255;
let stevePositionX=230;
let stevePositionY=100;

let bigCoin1X = 70;
let bigCoin1Y = 305;

let speed = 10;

let angle = 0;
let changeDirection = false;

let x = 230;
let y = 280;

let coins=[coin(55,60),coin(55,100),coin(55,140),coin(85,60),coin(85,100),coin(85,140),coin(120,60),coin(160,60),coin(150,120),coin(150,160),coin(200,60),
coin(200,120),coin(235,60),coin(235,160),coin(235,200),coin(270,60),coin(270,160),coin(270,200),coin(300,60),coin(300,120),coin(445,60),coin(445,100),coin(445,140),
coin(415,60),coin(415,100),coin(415,140),coin(380,60),coin(340,60),coin(350,120),coin(350,160),coin(55,200),coin(55,250),coin(55,360),coin(55,410),
coin(85,200),coin(85,250),coin(85,360),coin(85,410),coin(150,200),coin(150,240),coin(150,280),coin(150,330),coin(150,370),coin(150,410),coin(235,245),
coin(235,285),coin(235,325),coin(235,365),coin(270,245),coin(270,285),coin(270,325),coin(270,365),coin(445,200),coin(445,250),coin(445,360),coin(445,410),
coin(415,200),coin(415,250),coin(415,360),coin(415,410),coin(350,200),coin(350,240),coin(350,280),coin(350,330),coin(350,370),coin(350,410),coin(55,470),
coin(55,505),coin(55,540),coin(55,575),coin(85,470),coin(85,505),coin(85,540),coin(85,575),coin(150,450),coin(150,490),coin(120,540),coin(120,575),coin(160,540),coin(160,575),
coin(200,410),coin(200,490),coin(200,540),coin(200,575),coin(235,410),coin(235,450),coin(235,490),coin(270,410),coin(270,450),coin(270,490),coin(300,410),
coin(300,490),coin(300,540),coin(300,575),coin(445,470),coin(445,505),coin(445,540),coin(445,575),coin(415,470),coin(415,505),coin(415,540),coin(415,575),coin(350,450),
coin(350,490),coin(380,540),coin(380,575),coin(340,540),coin(340,575)];

let bigcoins=[Bigcoin(70,305),Bigcoin(430,305),Bigcoin(250,555)];


function preload(){
    
}

function setup(){
  createCanvas(500,650);
  frameRate(speed); 

  /*snake1 = new Enemies(100,200);
  snake2 = new Enemies(230,200);
  snake3 = new Enemies(260,100);
  snake4 = new Enemies(290,200);*/
}

function draw(){

    background(51);
    
    /*snake1.move();
    snake1.show();
    snake2.move();
    snake2.show();
    snake3.move();
    snake3.show();
    snake4.move();
    snake4.show();*/


    //snake positions
    snake1(snakePositionX, snakePositionY);
    snake2(x, y);
    snake3(x, y);
    snake4(snakePositionX, snakePositionY);

    /*if (changeDirection == false){
        snakePositionX = snakePositionX - 3;
    }
    if (changeDirection == true){
        snakePositionY= snakePositionY - 3;
    }
    if (snakePositionX > 320){
        //turn
        //snakePositionY = snakePositionY + 8;
        //snakePositionX = snakePositionX -8;
        changeDirection = true;
        
        //snakePositionY = snakePositionY + 8;
    }
    if (snakePositionY < 100){
        //snakePositionX = snakePositionX -8;
        //snakePositionY = snakePositionY +8;
        changeDirection = false;
    }*/


    /*if (changeDirection == false){
        x = x + 3;
        }
    if (changeDirection == true){
            y= y - 3;
        }
    if (x > 320){
        //turn
        changeDirection = true;
        }
    if (y < 100){
        changeDirection = false;
        }*/

    //snakePositionX = snakePositionX + 3;
    
    
    //steve start position
    steve(stevePositionX,stevePositionY); 
    
    
    //steve movement
    if (keyCode === LEFT_ARROW) {
        stevePositionX -= 5;
        
    }else if (keyCode === RIGHT_ARROW) {
       stevePositionX += 5;
    }
    
    if (keyCode === UP_ARROW) {
        stevePositionY -= 5;

    }else if (keyCode === DOWN_ARROW) {
        stevePositionY += 5;
    } //14

    
    
    //when steve collects bigger coin

   /* if (stevePositionX === bigCoin1X && stevePositionY === bigCoin1Y) {
        console.log("yay1");
        
    }
    if (stevePositionX === 430 && stevePositionY === 305) {
        console.log("yay2");  
    }
    if (stevePositionX === 250 && stevePositionY === 555) {
        console.log("yay3");  
    }*/

   
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
    if(stevePositionY > 575){
        stevePositionY = 575;
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
    
    
   //game fence
   noFill();
   stroke(0,0,255);
   strokeWeight(4);
   beginShape();
   vertex(30, 30);
   vertex(470, 30);
   vertex(470, 600);
   vertex(30, 600);
   endShape(CLOSE);
   
   
   //"horizontal line"wall
   strokeWeight(4);
   line(30,170,100,170);
   line(400,170,470,170);
   line(30,440,100,440);
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
   vertex(300,360);
   vertex(300,390);
   vertex(200,390);
   vertex(200,220);
   vertex(300,220);
   vertex(300,250);
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

   //coinsound (just a thought, can't work)
   let ding
   let coinsound
   function setup(){
     soundFormats('mp3', 'ogg');
     ding = loadSound('assets/coinsound.mp3');
   }

  
   p5.prototype.collideRectCircle = function (rx, ry, rw, rh, cx, cy, diameter) {

  var testX = cx;
  var testY = cy;

 
  if (cx < rx){         testX = rx       // left edge
  }else if (cx > rx+rw){ testX = rx+rw  }   // right edge

  if (cy < ry){         testY = ry       // top edge
  }else if (cy > ry+rh){ testY = ry+rh }   // bottom edge

  // // get distance from closest edges
  var distance = this.dist(cx,cy,testX,testY)

  // if the distance is less than the radius, collision!
  if (distance <= diameter/2) {
    
    ding.play();
  }

};

   
   //  Big coin 
   Bigcoin(70,305);
   Bigcoin(430,305);
   Bigcoin(250,555); 
    
   //big coin 1
   /*fill(255 ,215, 0);
   ellipse(70,305,15,15);

   //big coin 2
   fill(255 ,215, 0);
   ellipse(430,305,15,15);

   //big coin 3
   fill(255 ,215, 0);
   ellipse(250,555,15,15);*/
   
   
}

//snakes
/*class Enemies{
    constructor(snakePositionX,snakePositionY){
      this.x = snakePositionX;
      this.y = snakePositionY;
      
    }

move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
}

show() {
    stroke(255);
    strokeWeight(4);
    fill(50)
    rect(this.x, this.y, 30,30);
}
}*/
 
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
function snake1(snakePositionX, snakePositionY){
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
}



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

    //when steve collects bigger coin
    if (stevePositionX === 70 && stevePositionY === 305) {
        speed = 1;
        console.log("yay");
    }
    fill(200,200,0);
    if (stevePositionX === 430 && stevePositionY === 305) {
        console.log("yay2");  
    }
    if (stevePositionX === 250 && stevePositionY === 555) {
        console.log("yay3");
    }
}
