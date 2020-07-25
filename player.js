class Player{
   constructor(){
      this.name = null
      this.index = null
   }
   getCount(){
      database.ref("playerCount").on("value",function(data){
      playerCount=data.val()
      });
   }
   updateCount(){
      database.ref("/").update({
      "playerCount": this.index
      });
   }
   updatePlayerName(){
      var playerIndex = "players/player"+ this.index
      database.ref(playerIndex).set({
      "name": this.name
      });
   }
}

    
     
    