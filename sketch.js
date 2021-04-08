
var points = 0
let timer = 20
let timer1 = 17
let timer2 = 20
var score = 0
var gameState = "story";
var agent,forestBcg,invi1,invi2;
var bcgImg,story,start,bcgImg1,yehImg
var textInputBox,goButton,textInputBox1,textInputBox2,textInputBox3,textInputBox4,textInputBox5
var textInputBox6,textInputBox7,textInputBox8,textInputBox9
var level,title,level3Element,level3Bcg,level4Element,gmOrImg,edges;
var happyAgent,agentImg1,agent1,agent2,level4,level4Img,level4img,level4PartImg
var level2,level2Img,hitman,level3,levelPartImg,finalLevel,shotgunImage,akImage,sniperImage,gunGroup,gun;
var stoneGroup,stoneImage1,stoneImage2,stoneImage3,stoneImage4,stone,armyCartoon,armyCartoonImage

function preload(){
bcgImg = loadImage("images/background.jpeg")
startImg = loadImage("images/start image.png")
bcgImg1 = loadImage("images/background1.jpeg")
agentImg = loadImage("images/agentImg.png")
happyAgent = loadImage("images/agent happy.jpg")
yehImg  = loadImage("images/yehImage.jpg")
level2Img = loadImage("images/level2Image.jpg")
agentImg1 = loadImage("images/agent level 2_burned.png")
level3Bcg = loadImage("images/level3bcg.jpg")
forestBcg = loadImage("images/forestbcg.jpg")
armyCartoonImage = loadImage("images/armycartoon2.webp")
shotgunImage = loadImage("images/thomsun.png")
akImage = loadImage("images/akimage.png")
sniperImage = loadImage("images/sniperimage.png")
gunGroup = new Group()
stoneImage1 = loadImage("images/stoneimage1.png")
stoneImage2 = loadImage("images/stoneimage2.png")
stoneImage4 = loadImage("images/stoneimage4.png")
stoneGroup = new Group()
gmOrImg = loadImage("images/gameoverimage.jpeg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  start = createSprite(width - 60,50,70,30)
  start.addImage("img1",startImg)
  start.scale = 0.15;
  textInputBox = createInput("")
  textInputBox1 = createInput("")
  textInputBox2 = createInput("")
  textInputBox3 = createInput("")
  textInputBox4 = createInput("") 
  textInputBox5 = createInput("")
  textInputBox6 = createInput("")
  textInputBox7 = createInput("")
  textInputBox8 = createInput("")
  textInputBox9 = createInput("")
  goButton = createButton("Next")
  level2 = createButton("Level 2")
  finalLevel = createButton("FINAL LEVEL")
  title = createElement('h2')
  level3Element = createElement('h2')
  level4Element = createElement('h2')
  level3 = createButton("Level 3")
  level4 = createButton("Level 4")
    edges = createEdgeSprites();
  agent = createSprite(50,height - 150,30,100);
     agent.addImage("img2",agentImg)
     agent.visible = false
      agent1 = createSprite(50,450,30,100)
     agent1.addImage("img3",agentImg1)
     agent1.visible = false
     agent1.scale = 0.7;
     
     armyCartoon = createSprite(400,575,20,100)
     armyCartoon.addImage("img4",armyCartoonImage)
     armyCartoon.scale = 0.6;
     armyCartoon.visible = false;
     armyCartoon.debug = false;
     armyCartoon.setCollider("rectangle",0,20,110,320)
    
     
     
}

function draw() {
  
  
    background(bcgImg);
    armyCartoon.bounceOff(edges[0]);
  armyCartoon.bounceOff(edges[3]);
  armyCartoon.bounceOff(edges[2]);
  armyCartoon.bounceOff(edges[1]);

    textInputBox1.hide();
    textInputBox.hide();
    textInputBox2.hide();
    textInputBox3.hide();
    textInputBox4.hide();
    textInputBox5.hide();
    textInputBox6.hide();
    textInputBox7.hide();
    textInputBox8.hide();
    textInputBox9.hide();
    goButton.hide();
    level2.hide();
    level3.hide();
    level4.hide();
    finalLevel.hide();
    stoneImage1.scale = 0.4;
    fill("white")
    textSize(25)
    text("(COLLECT THESE POINTS TO USE IN LAST LEVEL) ",130,570)  
   

   if(gameState === "Play"){
    agent.visible = true;
    background(bcgImg1);

    fill("blue")
  textSize(40)
  text(timer,800,200)

  if(frameCount % 30 === 0 && timer > 0 ){
  timer--;
  }

  if(timer===0){
  textSize(20)
  text("GAME OVER",650,200)
  
  }
    fill("white")
    textSize(20)
    text("HINT: IT IS A STATE OF INDIA",500,350)
    fill("red")
    textSize(40);
     text("hnratsjaa",300,300)
     
     textInputBox.show();
     textInputBox.position(300,400)
     goButton.show();
     goButton.position(350,450)
     goButton.mousePressed(function(){       
       
       if(textInputBox.value().toLowerCase() === "rajasthan"){
        goButton.hide();
        gameState = "level1Completed"
        
        if(timer == 0){
          points = points + 50
          
        }else{
          points = points + 100
          
        }
       textInputBox.hide();
       agent.visible = false;
     }
       
       
     })
     
  }



  if(gameState === "level1Completed"){
    background(yehImg)
    level2.show();
    level2.position(700,550);
    
    level2.mousePressed(function(){
      gameState = "level2"
    })
  }



  if(gameState === "level2"){
    background(level2Img)
    fill("blue")
  textSize(40)
  text(timer1,700,150)
    
    

  if(frameCount % 40 === 0 && timer1 > 0){
  timer1--;
  }

  if(timer1===0){
  textSize(20)
  text("GAME OVER",650,200)
  
  }
    agent1.visible = true
    fill("blue")
    textSize(25);
    text("Now you are doing well so now  you have to complete a quiz",100,50)
    fill("blue")
    textSize(30)
    text("When we celebrate National Army Day",150,300)
    title.html("level 2")
    title.position(50,50)
    textInputBox1.show();
    textInputBox1.position(300,400)
    goButton.show();
    goButton.mousePressed(function(){       
    
      if(textInputBox1.value().toLowerCase() === "15 january" || textInputBox1.value().toLowerCase() === "january 15"){
       goButton.hide();
       if(timer1 == 0){
        points = points + 50
        
      }else{
        points = points + 100
        
      }
       gameState = "level2Completed"
       console.log("true")
      textInputBox1.hide();
      agent1.visible = false
      title.hide();
    }
      
      
    })
  }

  if(gameState === "level2Completed"){
  background(yehImg)
  
  level3.show();
  level3.position(700,550);
    
    level3.mousePressed(function(){
      gameState = "level3"
    })
  }

  if(gameState === "level3"){
     background(level3Bcg)
     
     fill("blue")
  textSize(40)
  text(timer2,700,150)
 
  if(frameCount % 60 === 0 && timer2 > 0){
  timer2--;
  }

  if(timer2===0){
  textSize(20)
  text("GAME OVER",650,200)
  
  }
     level3Element.html("level 3")
    level3Element.position(50,50)
     fill("yellow")
     textSize(30)
     text("NOW YOU HAVE TO FIND THE MISSING LETTERS",50,50)
     fill("white")
     textSize(30)
     text(" Where is the Headquarter of Northern Command of Indian Army",70,300)
     fill("white")
     textSize(30)
     text("UD__AM__U__ ",250,350)
     textInputBox3.show();
     textInputBox3.position(300,400)
     goButton.show();
     goButton.mousePressed(function(){       
     
       if(textInputBox3.value().toLowerCase() === "hpr" || textInputBox3.value().toLowerCase() === "udhampur"){
        goButton.hide();
       
        gameState = "level4Completed"
        if(timer2 == 0){
          points = points + 50
          
        }else{
          points = points + 100
          
        }
        level3Element.hide();
       textInputBox3.hide();
 
       }
     })
  }

  

 

 if(gameState === "level4Completed"){
   background("red")
   finalLevel.show();
  finalLevel.position(700,550);
   fill("blue")
   textSize(30)
   text("Yeh! you have collected a lots of points now",100,250)
   text(" you have to use points in this last level",100,290)
   text("every 100 points will use to respawn you",100,340)
   
   finalLevel.mousePressed(function(){
      gameState = "finalLevel"    
    })
  }




if(gameState === "finalLevel"){
  background(forestBcg)
  armyCartoon.visible = true;

fill("red")
textSize(25)
text("score: " + score,700,50)

  if (keyDown(RIGHT_ARROW)) {
    armyCartoon.x += 8
    
}
if (keyDown(LEFT_ARROW)) {
    armyCartoon.x -= 8
    
}


  
  if (frameCount % 40 === 0) {
    stone = createSprite(random(100, 800), 0, 100, 100);
    stone.velocityY = 6;
   stone.scale = 0.3;
    var rand = Math.round(random(1,2));
    switch(rand){
        case 1: stone.addImage("stone1",stoneImage1);
        break;
        case 2: stone.addImage("stone2",stoneImage2);
        break;
        
        
    }
    stoneGroup.add(stone);
    
}

if (frameCount % 70 === 0) {
  gun = createSprite(random(100, 800), 0, 100, 100);
  gun.velocityY = 6;
 gun.scale = 0.1;
  var rand = Math.round(random(1,2));
  switch(rand){
      case 1: gun.addImage("gun1",akImage);
      break;
      case 2: gun.addImage("gun2",sniperImage);
      break;
      
      
  }
  gunGroup.add(gun);
  
}

if(armyCartoon.isTouching(stoneGroup)){
armyCartoon.x = 400;
stoneGroup.destroyEach();
points = points - 100
}

if(armyCartoon.isTouching(gunGroup)){
  
  gunGroup.destroyEach();
  score = score + 1
  }


if(points === 0 || points === -50){
gameState = "gameOver"
}


}

 
if(mousePressedOver(start)){
  gameState = "Play"
  start.destroy();
  
}
if(gameState === "gameOver"){
  background(gmOrImg)
  fill("white")
textSize(30)
  text("Game Over!",610,300)
  fill("white")
textSize(30)
  text("Your Score is: " + score,580,240)
  fill("white")
textSize(30)
  text("Thanks for playing",280,370)
  armyCartoon.velocityX = 0
  stoneGroup.destroyEach();
  gunGroup.destoyEach();
  armyCartoon.destroy();
  }

fill("blue")
textSize(35)
text("POINTS : " + points,80,150)
 
  drawSprites();

}