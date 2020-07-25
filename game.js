class Game{
    constructor(){
        this.info = []
    }
    getGameState(){
        database.ref("gameState").on("value",function(data){
        gameState = data.val()
        })
    }
    updateGameState(){
        database.ref("/").update({
        "gameState": gameState
        })
    }
    async start(){
        var countref = await database.ref("playerCount").once("value")
        if(countref.exists()){
            playerCount = countref.val()
            playerObj = new Player()
            playerObj.getCount()
            formObj = new Form()
            formObj.display()
        }
    }
    play(){
        formObj.greetings.hide()
        if(this.info.length!==playerCount){
            var b = ["thief","police","king","queen","minister","soldier","prince","princess"]
            if (playerCount === 8){
                b.splice(8,1)
            }
            if (playerCount === 7){
                b.splice(7,2)
            }
            if (playerCount === 6){
                b.splice(6,3)
            }
            if (playerCount === 5){
                b.splice(5,4)
            }
            if (playerCount === 4){
                b.splice(4,1)
            }
            for(var i=200;i <= playerCount*250;i=i+250){
                var obj = createSprite(i,100)
                var removedIndex = Math.round(random(0,(b.length-1)))
                this.info.push({"object":obj,"char":b[removedIndex]}) 
                b.splice(removedIndex,1)
            }
            drawSprites()
        }
    }
    click(){
        for(var a in this.info){
            console.log(a)
            if(mousePressedOver(this.info[a].object)){  
                console.log(this.info[a])  
                console.log(this.info[a].char)
                text(this.info[a].char,a*350,450)
                console.log(a)
            }
        }
    }
}

