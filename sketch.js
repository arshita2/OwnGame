var player 
var finish
var gameState = "level_5"

var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7

var obstacle_1, obstacle_2, obstacle_3, obstacle_4, obstacle_5, obstacle_6, obstacle_7, obstacle_8

var o1,o2, o3, o4, o5, o6, o7

var ob1, ob2, ob3, ob4, ob5, ob6

var oo1, oo2, oo3, oo4, oo5

function preload() {

}

function setup() {
createCanvas(800, 600)

edges = createEdgeSprites()


player = createSprite(100, 100, 20, 20)

obstacle1 = createSprite(350, 180, 350, 20)
obstacle2 = createSprite(200, 320, 350, 20)
obstacle3 = createSprite(450, 400, 20, 250)
obstacle4 = createSprite(650, 400, 20, 250)
obstacle5 = createSprite(550, 60, 350, 20)
obstacle6 = createSprite(650, 200, 50, 50)
obstacle7 = createSprite(300, 480, 50, 50)
finish = createSprite(550, 590, 50, 20)
finish.shapeColor = "green"


obstacle_1 = createSprite(200, 150, 50, 50)
obstacle_2 = createSprite(350, 150, 50, 50)
obstacle_3 = createSprite(500, 150, 50, 50)
obstacle_4 = createSprite(650, 150, 50, 50)
obstacle_5 = createSprite(200, 300, 50, 50)
obstacle_6 = createSprite(350, 300, 50, 50)
obstacle_7 = createSprite(500, 300, 50, 50)
obstacle_8 = createSprite(650, 300, 50, 50)

o1 = createSprite(400, 100, 500, 20)
o2 = createSprite(400, 500, 500, 20)
o3 = createSprite(150, 330, 20, 330)
o4 = createSprite(650, 300, 20, 400)
o5 = createSprite(250, 400, 50, 50)
o6 = createSprite(400, 300, 50, 50)
o7 = createSprite(550, 200, 50, 50)

ob1 = createSprite(400, 100, 500, 20)
ob2 = createSprite(400, 500, 500, 20)
ob3 = createSprite(150, 330, 20, 330)
ob4 = createSprite(650, 300, 20, 400)
ob5 = createSprite(250, 400, 50, 50)
ob6 = createSprite(400, 300, 50, 50)
ob7 = createSprite(550, 200, 50, 50)

oo1 = createSprite(600, 100, 500, 20)
oo2 = createSprite(200, 200, 500, 20)
oo3 = createSprite(600, 300, 500, 20)
oo4 = createSprite(200, 400, 500, 20)
oo5 = createSprite(600, 500, 500, 20)

ob6.velocityX = 2

oo1.velocityX = -6
oo2.velocityX = -6
oo3.velocityX = -6
oo4.velocityX = -6
oo5.velocityX = -6

oo1.visible = false
oo2.visible = false
oo3.visible = false
oo4.visible = false
oo5.visible = false

ob1.visible = false
ob2.visible = false
ob3.visible = false
ob4.visible = false
ob5.visible = false
ob6.visible = false
ob7.visible = false

o1.visible = false
o2.visible = false
o3.visible = false
o4.visible = false
o5.visible = false
o6.visible = false
o7.visible = false

obstacle_1.visible = false
obstacle_2.visible = false
obstacle_3.visible = false
obstacle_4.visible = false
obstacle_5.visible = false
obstacle_6.visible = false
obstacle_7.visible = false
obstacle_8.visible = false
 
}

function draw() {
background("black")
player.bounceOff(edges[1])
player.bounceOff(edges[2])
player.bounceOff(edges[3])
player.bounceOff(edges[0])

//oo1.bounceOff(edges[0])
//oo1.bounceOff(edges[2])

drawSprites()

 
  if(gameState === "level_1") {
  
  finish.y = 590
   obstacle1.visible = true
   obstacle2.visible = true
   obstacle3.visible = true
   obstacle4.visible = true
   obstacle5.visible = true
   obstacle6.visible = true
   obstacle7.visible = true

   ob1.visible = false
   ob2.visible = false
   ob3.visible = false
   ob4.visible = false
   ob5.visible = false
   ob6.visible = false
   ob7.visible = false

   o1.visible = false
   o2.visible = false
   o3.visible = false
   o4.visible = false
   o5.visible = false
   o6.visible = false
   o7.visible = false

   obstacle_1.visible = false
   obstacle_2.visible = false
   obstacle_3.visible = false
   obstacle_4.visible = false
   obstacle_5.visible = false
   obstacle_6.visible = false
   obstacle_7.visible = false
   obstacle_8.visible = false


oo1.visible = false
oo2.visible = false
oo3.visible = false
oo4.visible = false
oo5.visible = false

   if(keyWentDown("UP_ARROW")) {
    //player.y = player.y - 20
    player.velocityY = -5
   }
   if(keyWentDown("DOWN_ARROW")) {
   //player.y = player.y + 20
   player.velocityY = 5
   }
   if(keyWentDown("RIGHT_ARROW")) {
   //player.x = player.x + 20
   player.velocityX = 5
   }
   if(keyWentDown("LEFT_ARROW")) {
   //player.x = player.x - 20
   player.velocityX = -5
   }
 
   if(player.isTouching(obstacle1)|| player.isTouching(obstacle2)
    || player.isTouching(obstacle3) || player.isTouching(obstacle4) ||
    player.isTouching(obstacle5) || player.isTouching(obstacle6) || 
    player.isTouching(obstacle7)) {
    player.x = 100
    player.y = 100
    player.velocityX = 0
    player.velocityY = 0
   }

   if(player.isTouching(finish)) {
     gameState = "level_2"

     player.x = 100
     player.y = 100
     player.velocityX = 0
     player.velocityY = 0  

    }
  }

 if(gameState === "level_2") { 
  finish.y = 590

   obstacle_1.visible = true
   obstacle_2.visible = true
   obstacle_3.visible = true
   obstacle_4.visible = true
   obstacle_5.visible = true
   obstacle_6.visible = true
   obstacle_7.visible = true
   obstacle_8.visible = true
   
   ob1.visible = false
   ob2.visible = false
   ob3.visible = false
   ob4.visible = false
   ob5.visible = false
   ob6.visible = false
   ob7.visible = false

   o1.visible = false
   o2.visible = false
   o3.visible = false
   o4.visible = false
   o5.visible = false
   o6.visible = false
   o7.visible = false

   obstacle1.visible = false
   obstacle2.visible = false
   obstacle3.visible = false
   obstacle4.visible = false
   obstacle5.visible = false
   obstacle6.visible = false
   obstacle7.visible = false


oo1.visible = false
oo2.visible = false
oo3.visible = false
oo4.visible = false
oo5.visible = false

   if(keyWentDown("UP_ARROW")) {
    //player.y = player.y - 20
    player.velocityY = -5
   }
   if(keyWentDown("DOWN_ARROW")) {
   //player.y = player.y + 20
   player.velocityY = 5
   }
   if(keyWentDown("RIGHT_ARROW")) {
   //player.x = player.x + 20
   player.velocityX = 5
   }
   if(keyWentDown("LEFT_ARROW")) {
   //player.x = player.x - 20
   player.velocityX = -5
   }
   if(player.isTouching(obstacle_1)|| player.isTouching(obstacle_2) || 
   player.isTouching(obstacle_3)|| player.isTouching(obstacle_4) || 
   player.isTouching(obstacle_5) || player.isTouching(obstacle_6)
   || player.isTouching(obstacle_7)|| player.isTouching(obstacle_8)) {
   gameState = "level_1"
   player.velocityX = 0
   player.velocityY = 0
   player.x = 100
   player.y = 100
   }

   if(player.isTouching(finish)) {
   gameState = "level_3"
   player.x = 100
   player.y = 130
   player.velocityX = 0
   player.velocityY = 0
   }

  }

if(gameState === "level_3") {
  //player.x = 100
  //player.y = 130

o1.visible = true
o2.visible = true
o3.visible = true
o4.visible = true
o5.visible = true
o6.visible = true
o7.visible = true

obstacle1.visible = false
   obstacle2.visible = false
   obstacle3.visible = false
   obstacle4.visible = false
   obstacle5.visible = false
   obstacle6.visible = false
   obstacle7.visible = false

   obstacle_1.visible = false
   obstacle_2.visible = false
   obstacle_3.visible = false
   obstacle_4.visible = false
   obstacle_5.visible = false
   obstacle_6.visible = false
   obstacle_7.visible = false
   obstacle_8.visible = false

   ob1.visible = false
   ob2.visible = false
   ob3.visible = false
   ob4.visible = false
   ob5.visible = false
   ob6.visible = false
   ob7.visible = false


oo1.visible = false
oo2.visible = false
oo3.visible = false
oo4.visible = false
oo5.visible = false

if(keyWentDown("UP_ARROW")) {
  //player.y = player.y - 20
  player.velocityY = -5
}
if(keyWentDown("DOWN_ARROW")) {
 //player.y = player.y + 20
 player.velocityY = 5
}
if(keyWentDown("RIGHT_ARROW")) {
 //player.x = player.x + 20
 player.velocityX = 5
}
if(keyWentDown("LEFT_ARROW")) {
 //player.x = player.x - 20
 player.velocityX = -5
}

if(player.isTouching(o1)||player.isTouching(o2)||player.isTouching(o3)||
player.isTouching(o4)||player.isTouching(o5)||player.isTouching(o6)||player.isTouching(o7)) {
 gameState = "level_1"
 player.velocityX = 0
 player.velocityY = 0
 player.x = 100
 player.y = 100
}

if(player.isTouching(finish)) {
  gameState = "level_4"
  player.x = 100
  player.y = 150
  player.velocityX = 0
  player.velocityY = 0
}
finish.y = 480
}

 if(gameState==="level_4") {
  ob1.visible = true
  ob2.visible = true
  ob3.visible = true
  ob4.visible = true
  ob5.visible = true
  ob6.visible = true
  ob7.visible = true

  obstacle1.visible = false
   obstacle2.visible = false
   obstacle3.visible = false
   obstacle4.visible = false
   obstacle5.visible = false
   obstacle6.visible = false
   obstacle7.visible = false

   obstacle_1.visible = false
   obstacle_2.visible = false
   obstacle_3.visible = false
   obstacle_4.visible = false
   obstacle_5.visible = false
   obstacle_6.visible = false
   obstacle_7.visible = false
   obstacle_8.visible = false

   o1.visible = false
   o2.visible = false
   o3.visible = false
   o4.visible = false
   o5.visible = false
   o6.visible = false
   o7.visible = false


oo1.visible = false
oo2.visible = false
oo3.visible = false
oo4.visible = false
oo5.visible = false


   ob6.bounceOff(ob3)
   ob6.bounceOff(ob4)

   if(keyWentDown("UP_ARROW")) {
    //player.y = player.y - 20
    player.velocityY = -5
  }
  if(keyWentDown("DOWN_ARROW")) {
   //player.y = player.y + 20
   player.velocityY = 5
  }
  if(keyWentDown("RIGHT_ARROW")) {
   //player.x = player.x + 20
   player.velocityX = 5
  }
  if(keyWentDown("LEFT_ARROW")) {
   //player.x = player.x - 20
   player.velocityX = -5
  }

   if(player.isTouching(ob1)||player.isTouching(ob2)||player.isTouching(ob3)||
   player.isTouching(ob4)||player.isTouching(ob5)||player.isTouching(ob6)||
   player.isTouching(ob7)) {
    gameState = "level_1"
    player.velocityX = 0
    player.velocityY = 0
    player.x = 100
    player.y = 100
   }
   if(player.isTouching(finish)) {
    gameState = "level_5"
    player.x = 100
    player.y = 50
    player.velocityX = 0
    player.velocityY = 0
  }
  finish.y = 480
 }

 if(gameState === "level_5") {
  //player.y = 50
oo1.visible = true
oo2.visible = true
oo3.visible = true
oo4.visible = true
oo5.visible = true

obstacle1.visible = false
obstacle2.visible = false
obstacle3.visible = false
obstacle4.visible = false
obstacle5.visible = false
obstacle6.visible = false
obstacle7.visible = false

obstacle_1.visible = false
   obstacle_2.visible = false
   obstacle_3.visible = false
   obstacle_4.visible = false
   obstacle_5.visible = false
   obstacle_6.visible = false
   obstacle_7.visible = false
   obstacle_8.visible = false

   o1.visible = false
   o2.visible = false
   o3.visible = false
   o4.visible = false
   o5.visible = false
   o6.visible = false
   o7.visible = false

   ob1.visible = false
   ob2.visible = false
   ob3.visible = false
   ob4.visible = false
   ob5.visible = false
   ob6.visible = false
   ob7.visible = false

  oo1.bounceOff(edges[0])
  oo1.bounceOff(edges[1])
  oo2.bounceOff(edges[0])
  oo2.bounceOff(edges[1])
  oo3.bounceOff(edges[0])
  oo3.bounceOff(edges[1])
  oo4.bounceOff(edges[0])
  oo4.bounceOff(edges[1])
  oo5.bounceOff(edges[0])
  oo5.bounceOff(edges[1])


  if(keyWentDown("UP_ARROW")) {
    //player.y = player.y - 20
    player.velocityY = -5
   }
   if(keyWentDown("DOWN_ARROW")) {
   //player.y = player.y + 20
   player.velocityY = 5
   }
   if(keyWentDown("RIGHT_ARROW")) {
   //player.x = player.x + 20
   player.velocityX = 5
   }
   if(keyWentDown("LEFT_ARROW")) {
   //player.x = player.x - 20
   player.velocityX = -5
   }

   if(player.isTouching(oo1)||player.isTouching(oo2)||player.isTouching(oo3)||
   player.isTouching(oo4)||player.isTouching(oo5)) {
    gameState = "level_1"
    player.velocityX = 0
    player.velocityY = 0
    player.x = 100
    player.y = 100
   }
   if(player.isTouching(finish)) {
     gameState = "end"
   }
 }

 if(gameState==="end"){
   background("gold")
   textSize(30)
   text("Congrats!",300, 100 )
   text("You've Finished All the Levels!!", 250, 300)
 }
}
