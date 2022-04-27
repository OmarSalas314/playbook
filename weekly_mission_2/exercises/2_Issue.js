const issue = {
    title: "02 Live 2 Semana 1 [Miércoles 6 de Abril]",
    repositoryNameAssociated: "carlogilmar",
    statuus: "open",
    numberOfComments: 118,
    labels: "Finalizado, Live2, Semana-1",
    author: "carlogilmar",
    dateCreated: "6 de abril",
    lastUpdated: "24 days go",
    getTitleAndAuthor: function(){
      return `This repository ${this.name} was created by ${this.repositoryNameAssociated}`
    },
    getGeneralInfo: function(){
      return `Status of this repository ${this.statuus} , labels ${this.labels} , date created ${this.dateCreated}`
    }
   }
   
   console.log("Nombre del issue:" + issue.title)
   console.log("Titulo y autor: " + issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())