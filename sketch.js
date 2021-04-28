let snakePositionX = 230;
let snakePositionY = 255;
let stevePositionX=230;
let stevePositionY=100;

let x;
let changeDirection;

function preload(){
    
}

function setup(){
  createCanvas(500,650);
  frameRate(15); 
  x = 1;
  changeDirection = false;
}

function draw(){

    background(51);

    //snake positions
    snake1(snakePositionX, snakePositionY);
    if(snakePositionX>width){
        changeDirection=true;
    }
	//if the circle passes the right side, change the direction
	//effects of direction change happen below
	else if (snakePositionX<=0){
		changeDirection=false;
    }
	//if the circle passes the left side (or becomes equal to 0)
	//changes the direction, effects are in the next if statement below
	
	if (snakePositionX>=0 && changeDirection == false){
		snakePositionX=snakePositionX+ 3;
    }
	//if x is greater than OR equal to 0, move right
	else if(changeDirection == true){
		snakePositionX=snakePositionX-3;
    }

    /*snakePositionX = snakePositionX + 3;
    if (snakePositionX > 400){
        //turn
        snakePositionY = snakePositionY + 3;
        snakePositionX = snakePositionX -3;
    }
    if (snakePositionY > 400){
        snakePositionX = snakePositionX -3;
        snakePositionY = snakePositionY +3;
    }*/

    snake2(230,280);
    snake3(230, 305);
    snake4(230, 330);
    
    //steve position
    steve(stevePositionX,stevePositionY); 

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
}
 
//player
function steve(x,y){
    //strokeWeight(1);
    //stroke(51);
    fill(255,255, 0);
    rect(x,y,30, 30,10);
    
}

//snake1
function snake1(x,y){
    strokeWeight(0);
    fill(0, 255 , 0);
    rect(x,y,50, 20);
}

//snake2
function snake2(x,y){
    strokeWeight(0);
    fill(255,0,0);
    rect(x,y,50, 20);
}
//snake3
function snake3(x,y){
    strokeWeight(0);
    fill(255 , 100 , 255);
    rect(x,y,50, 20);
}
//snake4
function snake4(x,y){
    strokeWeight(0);
    fill(0 , 0 , 255);
    rect(x,y,50, 20);
}






