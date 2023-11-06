"use strict"

class Lista {
    constructor() {
        this.lista = [];
    }

    enlistar(elemento, index) {
        if (index == undefined) {
            this.add(elemento);
        } else {
            this.lista.splice(index, 0, elemento);
        }
    }mç

    add(elemento) {
        this.lista.push(elemento);
    }

    remove(elemento) {
        this.lista = this.lista.filter(e => e != elemento);
    }

    get(index) {
        return this.lista[index];
    }

    size() {
        return this.lista.length;
    }

    toString() {
        return this.lista.toString();
    }
}