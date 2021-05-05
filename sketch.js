var knife;
var magnus;
var albert;
var ellen;
var sigruen;
var norway;
var velkommen;
var score=0;
function preload(){
  magnus=loadImage('sword.png');
 albert=loadImage('fruit1.png');
 ellen=loadImage('fruit2.png');
  sigruen=loadImage('fruit3.png');
  norway=loadImage('fruit4.png');
}
function setup(){
  canvas=createCanvas(500,500);
  knife= createSprite(250,250,20,20);
  velkommen= new Group();
}
function draw(){
background('brown');
  knife.x=mouseX;
  knife.y=mouseY;
  knife.addImage('magnus',magnus);
  text(score,30,25);
  if(knife.isTouching(velkommen)){
    score=score+5;
    velkommen.destroyEach();
  }
  carlsen();
  drawSprites();
}
function carlsen(){
  if(frameCount%90===0){
    blueberry=createSprite(480,random(50,450),30,30);
             blueberry.velocityX=-3;
    var champion=Math.round(random(1,4));
  switch(champion){
    case 1:blueberry.addImage('norge',albert);
      break
      case 2: blueberry.addImage('norge',ellen);
      break
      case 3: blueberry.addImage('norge',sigruen);
      break
      case 4:blueberry.addImage('norge',norway);
  break
  
        
         }
             blueberry.scale=0.6;
      velkommen.add(blueberry);
  }
    
}
