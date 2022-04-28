const Uber = {
    user: "Omar Salas",
    Profile: "Omar Ernesto Salas Vieyra",
    Travel: "Cempaxuchitl 49 Col. Ed Ruiz to Luis Martinez de Castro 48 Col Poblado Ocolusen",
    getProfile: function(){
      return `Profile ${this.Profile} ` 
    },
    getTravel: function(){
      return `${this.Travel} `
    },
   }
   
   console.log("Nombre de usuario en Uber:" + Uber.Profile)
   console.log("Last Travel: " + Uber.getTravel())