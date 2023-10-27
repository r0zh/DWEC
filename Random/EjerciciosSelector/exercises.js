function Card(title, description, location) {
    this.title = title;
    this.description = description;
    this.location = location;
}

function Group(title) {
    this.title = title;
}

let exercises = [
    new Card("Exercise 01", "Display an alert box (js in file appart)", "./ejercicios/Ejercicio01-02/index.html"),
    new Card("Exercise 01", "Display an alert box (js in file appart)", "./ejercicios/Ejercicio01-02/index.html"),
    new Card("Exercise 01", "Display an alert box (js in file appart)", "./ejercicios/Ejercicio01-02/index.html"),
    new Card("Exercise 01", "Display an alert box (js in file appart)", "./ejercicios/Ejercicio01-02/index.html")
]

let cards = `<div name = "Cards" class="cards">${exercises.map(exercise => `<div name="Card" class="card"><h2>${exercise.title}</h2><p>${exercise.description}</p><div class="card-btn"><a href="${exercise.location}">Go to Exercise</a> </div> </div > exercise}`).join('')}</div>`

let group = `<div name="Grupo" class="group"><h1 class="group-title">Alert()</h1>${cards}</div>`

let groups = `<div name="Grupos" class="groups">${group}</div>`



let group2 = { "alert":  }