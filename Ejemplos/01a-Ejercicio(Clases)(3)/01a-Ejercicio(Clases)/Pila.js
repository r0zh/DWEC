"use strict"

import {Lista} from './Lista.js';

export class Pila extends Lista {
    constructor() {
        super();
    }
    apilar(elemento) {
        return super.enlistar(elemento, super.tamano());
    }
    desapilar() {
        return super.desenlistar(super.tamano()-1);
    }
    ojear() { // solo puedo mirar el último elemento que entró
        return super.ojear(super.tamano()-1);
    }
}