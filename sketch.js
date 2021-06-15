var happydogimage, hungrydogimage, dog, database, foods, foodstock

function preload()
{
 happydogimage = loadImage('images/dogImg1.png')
 hungrydogimage = loadImage('images/dogImg.png')
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(200,200)
  dog.addImage('hungry',hungrydogimage)
  dog.scale = 0.5
}


function draw() {  

  background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
writeStock(foods);
dog.addImage('happy',happydogimage)
}
text('foodStock',200,200)
textSize(0.5)
fill('red')
stroke(0.2)

  drawSprites();
  
  

}

function readStock(data){
  foods = data.val();
}

function writeStock(x){


if(x<=0){
x = 0;
}
else{
  x=x-1;
}

  database.ref('/').update({Food:x})
}
