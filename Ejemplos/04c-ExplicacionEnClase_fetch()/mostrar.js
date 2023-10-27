"use strict"

function mostrarPosts() {
    let aleatorio = aleatorioExclusivo(0, 100);
    document.getElementById("resTexto").innerHTML = ""; //LIMPIAR EL AREA DE 'resultado'
    fetch(`https://jsonplaceholder.typicode.com/posts/${aleatorio}`) // URL de la REST API
        .then(response => response.json())
        .then(json => {
            document.getElementById("resTexto").innerHTML = `Identificador del usuario: ${json.userId} <br />
                                                            Identificador: ${json.id} <br />
                                                            Título: ${json.title} <br />
                                                            Cuerpo: ${json.body}`;
        })
}

function mostrarComments() {
    let aleatorio = aleatorioExclusivo(0, 500);
    document.getElementById("resTexto").innerHTML = "";
    fetch(`https://jsonplaceholder.typicode.com/comments/${aleatorio}`) // URL de la REST API
        .then(response => response.json())
        .then(json => { 
            document.getElementById("resTexto").innerHTML = `Identificador del post: ${json.postId} <br />
                                                            Identificador: ${json.id} <br />
                                                            Nombre: ${json.name} <br />
                                                            email: ${json.email} <br />
                                                            Cuerpo: ${json.body}`;
        })
}

function mostrarAlbums() {
    let aleatorio = aleatorioExclusivo(0, 100);
    document.getElementById("resTexto").innerHTML = "";
    fetch(`https://jsonplaceholder.typicode.com/albums/${aleatorio}`) // URL de la REST API
        .then(response => response.json())
        .then(json => {
            document.getElementById("resTexto").innerHTML = `Identificador del usuario: ${json.userId} <br />
                                                            Identificador: ${json.id} <br />
                                                            Título: ${json.title}`;
        })

}

function mostrarPhotos() {
    document.getElementById("resTexto").innerHTML = "";
    fetch('https://jsonplaceholder.typicode.com/photos') // URL de la REST API
        .then(response => response.json())
        .then(json => {
            let aleatorio = aleatorioExclusivo(0, 5000);
            json = json[aleatorio];
            document.getElementById("resTexto").innerHTML = `Identificador del album: ${json.albumId} <br />
                                                            Identificador: ${json.id} <br />
                                                            Imágen: <br /> <img src="${json.url}" alt="${json.title}" /> <br />
                                                            Miniatura: <br /> <img src="${json.thumbnailUrl}" alt="${json.title}" /> <br />`;
        })
}

function mostrarUsers() {
    document.getElementById("resTexto").innerHTML = "";
    fetch('https://jsonplaceholder.typicode.com/users') // URL de la REST API
        .then(response => response.json())
        .then(json => {
            let aleatorio = aleatorioExclusivo(0, 10);
            json = json[aleatorio];
            document.getElementById("resTexto").innerHTML = `Identificador: ${json.id} <br />
                                                            Nombre del usuario: ${json.username} <br />
                                                            email: ${json.email} <br />
                                                            Telefono: ${json.phone} <br />
                                                            web: ${json.website}`;
        })
}

//let datos = cargarAPIWeb("https://jsonplaceholder.typicode.com/posts"); // Está en formato JSON