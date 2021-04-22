function preload(){
    
}

function setup(){
  createCanvas(500,650);
  background(51);
  
}

function draw(){
    //snake positions
    snake1(40,40); 
    snake2(100,40);
    snake3(160, 40);
    snake4(220, 40);
    
    //steve position
    steve(230,100);  
    
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
   noFill()
   beginShape();
   vertex(110,110);
   vertex(110,90);
   vertex(170,90);
   endShape();
  
   noFill()
   beginShape();
   vertex(390,110);
   vertex(390,90);
   vertex(330,90);
   endShape();
  
   noFill()
   beginShape();
   vertex(110,500);
   vertex(110,520);
   vertex(170,520);
   endShape();
   
   noFill()
   beginShape();
   vertex(390,500);
   vertex(390,520);
   vertex(330,520);
   endShape();
  
   // "C"shape wall
   noFill()
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
    strokeWeight(1);
    stroke(51);
    fill(255,255, 0);
    rect(x,y, 30,30,10);
    
}

//snake1
function snake1(x,y){
    strokeWeight(1);
    stroke(51);
    fill(0, 255 , 0);
    rect(x,y,50, 20);  
}

//snake2
function snake2(x,y){
    strokeWeight(1);
    fill(255,0,0);
    rect(x,y,50, 20);
}
//snake3
function snake3(x,y){
    strokeWeight(1);
    fill(255 , 100 , 255);
    rect(x,y,50, 20);
}
//snake4
function snake4(x,y){
    strokeWeight(1);
    fill(0 , 0 , 255);
    rect(x,y,50, 20);
}




