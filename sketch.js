let snakePositionX = 230;
let snakePositionY = 255;
let stevePositionX=230;
let stevePositionY=100;

let bigCoin1X = 70;
let bigCoin1Y = 305;

let snakes;
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
}

function draw(){

    background(51);

    //snake positions
    snake1(snakePositionX, snakePositionY);


    
        snakePositionX = snakePositionX + 3;
    
    
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

    snake2(snakePositionX, snakePositionY);
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
        }
*/
    snake3(snakePositionX, snakePositionY);
    snake4(snakePositionX, snakePositionY);
    
    
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

    
    //if player and snake collide

     if (snakePositionX === stevePositionX && snakePositionY === stevePositionY){
        console.log("collision");
    }

    
    
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

    //Make sure player does not go through the walls(line)
    if(stevePositionX<100 && stevePositionY>140 && stevePositionY<170){
        stevePositionY=140;
    }
    if(stevePositionX<120 && stevePositionY==170){
        stevePositionX=120;
    }
    if(stevePositionX<100 && stevePositionY<200 && stevePositionY>170){
        stevePositionY=200;
    }

    if(stevePositionX>400 && stevePositionY>140 && stevePositionY<170){
        stevePositionY=140;
    }
    if(stevePositionX>380 && stevePositionY==170){
        stevePositionX=380;
    }
    if(stevePositionX>400 && stevePositionY<200 && stevePositionY>170){
        stevePositionY=200;
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
   
   
   //"line"wall
   strokeWeight(4);
   line(30,170,100,170);
   line(400,170,470,170);
   line(30,440,100,440);
   line(400,440,470,440);
   line(110,220,110,390);
   line(390,220,390,390);
   line(200,150,200,180);
   line(300,150,300,180);
   line(200,440,200,470);
   line(300,440,300,470);
   
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
 
//player
function steve(x,y){
    //strokeWeight(1);
    //stroke(51);
    rectMode(CENTER);
    fill(255,255, 0);
    //rect(x,y,30, 30,10);
   rect(x,y,30,30,10);
}

//snake1
function snake1(x,y){
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
