"use strict"

export class Lista {
    constructor() {
        this.lista = new Array();
    }
    enlistar(elemento, posicion) {
        return this.lista.splice(posicion, 0, elemento);
    }
    desenlistar(posicion) {
        return this.lista.splice(posicion, 1);
    }
    ojear(posicion) { // entendemos que se puede ojear cualquier posición
        return this.lista[posicion];
    }
    vacia() {
        return (this.lista.length == 0);
    }
    tamano() {
        return this.lista.length;
    }
    mostrar() {
        console.log(this.lista);
    }
}
