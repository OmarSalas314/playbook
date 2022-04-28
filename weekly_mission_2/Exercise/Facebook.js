const Face = {
    user: "Omar Salas",
    username: "@HomarSalas",
    Joined: "December 2012",
    Post: "RETRO COLLECTOR MÉXICO. 🇲🇽",
    Biography: "Ing Civil nacido den la CDMX en 1989 pero radico en Morelia actualmente",
    getUser: function(){
      return `User ${this.user} ` 
    },
    getPost: function(){
      return `${this.Post} `
    },
    getBiography: function(){
        return `Biography ${this.Biography} `
    }
   }
   
   console.log("Nombre de usuario en Facebook:" + Face.user)
   console.log("Last Post: " + Face.getPost())
   console.log(Face.getBiography())