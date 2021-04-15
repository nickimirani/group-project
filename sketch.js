function preload(){
    
}

function setup(){
}

function draw(){
    //snake positions
    snake1(40,40); 
    snake2(100,40);
    snake3(160, 40);
    snake4(220, 40);
    
    //steve position
    steve(200,100);

}

//player
function steve(x,y){
    fill(0, 10, 200);
    rect(x,y, 30,30,10);
}

//snake1
function snake1(x,y){
    fill(10 , 100 , 30);
    rect(x,y,50, 20);
}
//snake2
function snake2(x,y){
    fill(10 , 100 , 30);
    rect(x,y,50, 20);
}
//snake3
function snake3(x,y){
    fill(10 , 100 , 30);
    rect(x,y,50, 20);
}
//snake4
function snake4(x,y){
    fill(10 , 100 , 30);
    rect(x,y,50, 20);
}


