"use strict"

import {Lista} from './Lista.js';

export class Cola extends Lista {
    constructor() {
        super();
    }
    encolar(elemento) {
        return super.enlistar(elemento, 0); // return super.enlistar(elemento, super.tamano());
    }
    desencolar() {
        return super.desenlistar(super.tamano()-1); // return super.enlistar(elemento, 0);
    }
    ojear() { // solo puedo mirar el primer elemento que entró
        return super.ojear(0); // return super.ojear(super.tamano()-1);
    }
}