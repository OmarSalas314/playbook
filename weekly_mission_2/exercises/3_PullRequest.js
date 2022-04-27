const pullrequest = {
    title: "freeCodeCamp",
    branchName: "fix(curriculum): change example to valid HTML",
    dateCreated: "6 de abril",
    status: "Open",
    repositoryNameAssociated: "freeCodeCamp",
    getStatus: function(){
      return `Status of this repository ${this.status}`
    },
    getTitleAndAutor: function(){
        return `This pullrequest ${this.branchName} was created by ${this.title}`
    }
   }
   
   console.log("Nombre del pullrequest:" + pullrequest.title)
   console.log("Estatus del repositorio: " + pullrequest.getStatus())
   console.log(pullrequest.getTitleAndAutor())