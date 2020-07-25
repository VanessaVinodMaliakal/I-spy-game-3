var database,formObj,playerCount,playerObj,gameState,gameObj,caseImg,entry;
playerCount = 0
gameState = 0

function preload(){
	caseImg = loadImage("treasure chest.jpg")
}

function setup(){
	createCanvas(displayWidth-30,displayHeight-150)
	database = firebase.database();
	gameObj =  new Game()
	gameObj.getGameState()
	gameObj.start()
}

function draw(){
	
	if(gameState == 1){
		gameObj.play()
		gameObj.click()
	}
	
}
