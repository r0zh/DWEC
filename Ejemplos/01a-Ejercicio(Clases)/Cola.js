"use strict"

class Cola {
    constructor() {
        this.cola = [];
    }
    encolar(elemento) {
        return this.cola.unshift(elemento); // return this.cola.push(elemento);
    }
    desencolar() {
        return this.cola.pop(); // return this.cola.shift();
    }
    ojear() {
        return this.cola[0]; // return this.cola[this.cola.length-1];
    }
    vacia() {
        return (this.cola.length == 0);
    }
    tamano() {
        return this.cola.length;
    }
    mostrar() {
        console.log(this.cola);
    }
}