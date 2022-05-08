const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

// 
console.log("Ejemplo 1: Imprimiendo los elementos de una lista")
explorers.forEach(function(explorer) {return explorer.name})


// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
var newlexplorersstack = explorers.map(function(explorer) {
  return explorer.stack
})

console.log("Creando nueva lista")
console.log("Stack " + newlexplorersstack)

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)

const explorersjs = newlexplorersstack.filter((explorer) => // esta es una función
explorer.includes('js') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("4.Lista de explorers que tengan en su stack js")
console.log(explorersjs)

//-------------------------------------------------------------------------------------------------------------
//5.Busca el primer explorer que sea de la CDMX, usa FIND

const explorerscdmx = explorers.find((user) => user.city = "CDMX")
console.log("Explorer que sea de la CDMX:" + explorerscdmx.name)

//-------------------------------------------------------------------------------------------------------------
//6.Obtén la suma de todos los exercises_completed, usa REDUCE
var newlexplorerec = explorers.map(function(explorer) {
  return explorer.exercises_completed
})
const sumec = newlexplorerec.reduce((acc, element) => acc + element, 0)
console.log("Obtén la suma de todos los exercises_completed, usa REDUCE")
console.log(sumec)
