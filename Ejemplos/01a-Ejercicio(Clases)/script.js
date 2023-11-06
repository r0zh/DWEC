"use strict"

const PRENDAS = [
    'CAMISA',
    'PANTALÓN',
    'CAMISETA',
    'TOALLA',
    'CALCETINES',
    'CHAQUETA',
    'BUFANDA',
    'SUDADERA',
    'CHALECO',
    'ABRIGO'];
const cesto = new Pila();

const introducir = document.getElementById("introducir");
introducir.addEventListener("click", function () {
    let prenda = PRENDAS[generaN(1, PRENDAS.length) - 1];
    paraLavar(cesto, prenda);
    mostrar(cesto);
    /*     cesto.mostrar(cesto.apilar(prenda)); */
});

const obtener = document.getElementById("obtener");
obtener.addEventListener("click", function () {
    console.log(`He lavado: ${lavar(cesto)}`);
    mostrar(cesto);
});

const MATRICULAS = [
    '12345-ABC',
    '23456-BCD',
    '34567-CDE',
    '45678-DEF',
    '56789-EFG',
    '67890-FGH',
    '78901-GHI',
    '89012-HIJ',
    '90123-IJK',
    '98765-JKL'];
const taller = new Cola();

const llegada = document.getElementById("llegada");
llegada.addEventListener("click", function () {
    let coche = MATRICULAS[generaN(1, MATRICULAS.length) - 1];
    paraReparar(taller, coche);
    mostrar(taller);
    /*     taller.mostrar(taller.encolar(coche)); */
});

const atender = document.getElementById("atender");
atender.addEventListener("click", function () {
    console.log(`He reparado: ${reparar(taller)}`);
    mostrar(taller);
});