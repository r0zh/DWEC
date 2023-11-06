"use strict"

class Pila {
    constructor() {
        this.pila = []; // new Array();
    }
    apilar(elemento) {
        return this.pila.push(elemento);
    }
    desapilar() {
        return this.pila.pop();
    }
    ojear() {
        return this.pila[this.pila.length-1];
    }
    vacia() {
        return (this.pila.length == 0);
    }
    tamano() {
        return this.pila.length;
    }
    mostrar() {
        console.log(this.pila);
    }
}