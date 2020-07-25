class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createButton("proceed")
        this.greetings = createElement("h2")
        this.entry = createButton("START")
    }

    display(){

        this.input.position(width-800,height-500)
        this.button.position(width-750,height-450)

        var title = createElement("h1")
        title.html("I spy")
        title.position(width-750,height-600)
        
        this.button.mousePressed(()=>{

            this.input.hide()
            this.button.hide()
            
            var name = this.input.value()
            
            this.greetings.html(name+". It's a pleasure to have you as a part of I spy")
            this.greetings.position(width-950,height-500)
            this.entry.position(width-750,height-400)
            
            playerObj.name = name
            playerCount=playerCount+1
            console.log(playerCount)
            playerObj.index = playerCount
            playerObj.updateCount()
            playerObj.updatePlayerName()
      
    })
     
    this.entry.mousePressed(()=>{
        
	 	gameState = 1
		gameObj.updateGameState()
		this.entry.hide()
    

})
}
}
       