'use strict';
let datos = [];
let solicitudDB,
    bd,
    canalBD;
let nombreBD = "DATOS";
let versionBD = 1;
let tablaBD = "datos";
solicitudDB = indexedDB.open(nombreBD, versionBD);
solicitudDB.onerror = function (event) {
    console.error(`IndexedDB error: ${event.target.errorCode}`);
};
solicitudDB.onsuccess = function (event) {
    console.info('Conexión satisfactoria');
    bd = event.target.result;
};
solicitudDB.onupgradeneeded = function (event) {
    console.info('Base de datos creada');
    bd = event.target.result;
    let registros = bd.createObjectStore(tablaBD, { keyPath: "id", autoIncrement: true });
    registros.createIndex("nombre", "nombre", { unique: false }); // CREAMOS UN CAMPO 'nombre'
    registros.createIndex("edad", "edad", { unique: false }); // CREAMOS UN CAMPO 'clave'

    registros.oncompleted = function (event) {
        console.info('Almacen de datos creado');
    }
};
mostrarDatos(); // MUESTRO LOS DATOS
// DATOS
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
// GUARDAR
const guardar = document.getElementById("guardar");
guardar.addEventListener("click", function () {
    grabarDato(nombre.value, edad.value);
});
// BORRAR
const borrar = document.getElementById("borrar");
borrar.addEventListener("click", function () {
    borrarDato(nombre.value);
});

