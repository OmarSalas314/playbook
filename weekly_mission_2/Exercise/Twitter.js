const Twitter = {
    user: "Omar Ernesto Salas Vieyra",
    username: "@OmarSalas314",
    Joined: "December 2021",
    TrendingTopic: "Entrega del #SalarioRosa en #Nezahualcóyotl.",
    Hashtag: "#SalarioRosa",
    getUser: function(){
      return `User ${this.user} ` 
    },
    getTrending_topic: function(){
      return `Trending topic on this moment ${this.TrendingTopic} `
    },
    getHashtag: function(){
        return `Hashtag ${this.Hashtag} `
    }
   }
   
   console.log("Nombre de usuario en Twitter:" + Twitter.user)
   console.log("Trending: " + Twitter.getTrending_topic())
   console.log(Twitter.getHashtag())