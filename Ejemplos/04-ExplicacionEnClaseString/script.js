"use strict"

console.log("----------COMILLAS: 'SIMPLES', \"DOBLES\" & `BACKTICKS`----------"); // Caracter especial: comillas dentro de comillas
// " ' ' " da igual cuál uses pero no las anides
let dobles = "Las comillas dobles \n están bien"; // Caracter especial: retorno de carro
let simples = 'las comillas simples \r\n también están bien';

// Backticks vs '+, concatenación'
let frase = "/ " + dobles + ", pero " + simples + " \\"; // ¿Cuál te resulta más cómoda?
console.log(frase);
let phrase = `/ ${dobles}, pero ${simples} \\`; // ¿Cuál te resulta más cómoda?
console.log(phrase);

console.log("----------BACKTICKS & OPERACIONES----------");
// Backticks admite operaciones
let m = 9007199254740991;
let maximo = `El maximo es: ${m + 1}`;
console.log(maximo);
let fallo = `Aquí falla: ${m + 2}`;
console.log(fallo);

function sum(a, b) {
    return a + b;
}
console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

console.log("----------CARACTERES ESPECIALES----------");
// Backticks admite multiples líneas
let guestList1 = `Invitados:
 * Juan
 * Pedro
 * Maria
`;
console.log(guestList1);

let guestList2 = 'Invitados:\n * Juan\n * Pedro\n * Maria';
console.log(guestList2);

// Los caracteres especiales más comunes
let guestList3 = 'Invitados:\n \t* \'Juan\'\n \t* \"Pedro\"\n \t* \`Maria\`';
console.log(guestList3);

console.log("----------typeof----------");
// Comprobando tipos
let saludo = "hola";
console.log(saludo);
console.log(typeof (saludo));
saludo = 123456; // el tipo ha cambiado a numérico
console.log(saludo);
console.log(typeof (saludo));

console.log("----------length----------");
// Longitud de la cadena
console.log(frase.length);
console.log(phrase.length);

console.log("----------[pos], charAt(pos)----------");
// Accediendo a los caracteres a tráves de su posición
let cadena = `Hola`;
// el primer carácter
console.log(cadena[0]); // H
console.log(cadena.at(0)); // H, EN DESUSO
// el último carácter
console.log(cadena[cadena.length - 1]); // a, RECUERDA que: los indices comienzan en '0'. El indice mayor es: longitud-1  

let invCad = '';
for (let i = 1; i <= cadena.length; i++) {
    invCad += `${cadena.at(-i)} `;
}
console.log(invCad);

console.log("----------RECORRIENDO LA CADENA----------");
// metodo 'of' para iterables
cadena = '';
for (let char of 'Hola') {
    cadena += `${char} `; // H,o,l,a (char se convierte en "H", luego "o", luego "l", etc.)
}
console.log(cadena);

console.log("----------INMUTABILIDAD----------");
// Las cadenas no cambian internamente, pero si son reemplazadas
let despedida = 'Adios';
console.log(despedida);
// despedida[0] = 'a'; // error
despedida = 'Hasta Luego';
console.log(despedida); // sustituye todo el string
// Copiar la cadena despedida con la 'H' en minúscula 'h'
let despedida2 = 'h';
for (let i = 1; i < despedida.length; i++) {
    despedida2 += despedida[i]; // adios
}
console.log(despedida2);

console.log("----------toUpperCase(), toLowerCase()----------");
// Capitalizando cadenas
console.log(despedida2.toUpperCase());
console.log(despedida2.toLowerCase());

console.log("----------indexOf(cadenaBusqueda, posicionInicio)----------");
// ¿Dónde se encuentra la cadena o carácter?
let str = 'Widget con id';
console.log(str.indexOf('Widget')); // 0, ya que 'Widget' es encontrado al comienzo
console.log(str.indexOf('widget')); // -1, no es encontrado, la búsqueda toma en cuenta minúsculas y mayúsculas.
console.log(str.indexOf('id')); // 1, "id" es encontrado en la posición 1 (..idget con id)

// Todas las ocurrencias
let dicho = 'Astuto como un zorro, fuerte como un buey';
let buscamos = 'como'; // busquemos por él

console.log("----------***************----------");
let pos = 0;
let posiciones = '';
// Bucle 'while'
while (true) {
    let foundPos = dicho.indexOf(buscamos, pos);
    if (foundPos == -1) break;

    posiciones += `${foundPos}, `;
    pos = foundPos + 1; // continuar la búsqueda desde la siguiente posición
}
console.log(`Encontrado en: ${posiciones}`);

console.log("----------***************----------");
pos = 0;
posiciones = '';
for (let i = pos; i < dicho.length; i += pos + 1) {
    let foundPos = dicho.indexOf(buscamos, pos);
    if (foundPos == -1) {
        foundPos = '';
        i = dicho.length;
    } else {
        posiciones += `${foundPos}, `;
        pos = foundPos + 1; // continuar la búsqueda desde la siguiente posición
    }
}
console.log(`Encontrado en: ${posiciones}`);

console.log("----------***************----------");
pos = -1;
posiciones = '';
// Bucle 'while' abreviado
while ((pos = dicho.indexOf(buscamos, pos + 1)) != -1) {
    posiciones += `${pos}, `;
}
console.log(`Encontrado en: ${posiciones}`);

console.log("----------includes(), startsWith() y endsWith()----------");
// Más métodos
console.log(dicho.includes(buscamos, 0));
console.log(dicho.startsWith(buscamos, 0));
console.log(dicho.endsWith(buscamos, 0));

dicho = 'Astuto como un zorro, fuerte como un buey';
buscamos = 'como';
console.log(dicho.includes(buscamos, 0));
buscamos = 'Astuto';
console.log(dicho.startsWith(buscamos, 0));
buscamos = 'buey';
console.log(dicho.endsWith(buscamos, dicho.length));

console.log("----------slice()----------");
// Substring con 'slice'
let email = 'jota_pe@educaand.es'
console.log(`El correo es: ${email}`);
console.log(`El nombre del usuario es: ${email.slice(0, email.indexOf('@', pos))}`);
console.log(`El servidor es: ${email.slice(email.indexOf('@', pos) + 1, email.indexOf('.', pos))}`);
console.log(`El dominio es: ${email.slice(email.indexOf('.', pos) + 1)}`); // si el nombre del usuario contiene un '.' fallaría

let email2 = 'jota.pe@educaand.es'
console.log(`Ahora el correo es: ${email2}`);
console.log(`El dominio es: ${email2.slice(email2.indexOf('.', pos) + 1, email2.length)}`);
// Solución
email2 = email2.slice(email2.indexOf('@', pos) + 1); // elimino la parte del nombre del usuario
console.log(`El dominio es: ${email2.slice(email2.indexOf('.', pos) + 1)}`);

console.log("----------substring()----------");
// Substring con 'substring' (igual al anterior)
email = 'jota_pe@educaand.es'
console.log(`El correo es: ${email}`);
console.log(`El nombre del usuario es: ${email.substring(0, email.indexOf('@', pos))}`);
console.log(`El servidor es: ${email.substring(email.indexOf('@', pos) + 1, email.indexOf('.', pos))}`);
console.log(`El dominio es: ${email.substring(email.indexOf('.', pos) + 1)}`); // si el nombre del usuario contiene un '.' fallaría

email2 = 'jota.pe@educaand.es'
console.log(`Ahora el correo es: ${email2}`);
console.log(`El dominio es: ${email2.substring(email2.indexOf('.', pos) + 1, email2.length)}`);
// Solución
email2 = email2.slice(email2.indexOf('@', pos) + 1); // elimino la parte del nombre del usuario
console.log(`El dominio es: ${email2.substring(email2.indexOf('.', pos) + 1)}`);

console.log("----------substr()----------");
// Substring con 'substr' (igual al anterior)
email = 'jota_pe@educaand.es'
console.log(`El correo es: ${email}`);
console.log(`El nombre del usuario es: ${email.slice(0, email.indexOf('@', pos))}`);
console.log(`El servidor es: ${email.substr(email.indexOf('@', pos) + 1, email.indexOf('.', pos))}`);
console.log(`El dominio es: ${email.substr(email.indexOf('.', pos) + 1)}`); // si el nombre del usuario contiene un '.' fallaría

email2 = 'jota.pe@educaand.es'
console.log(`Ahora el correo es: ${email2}`);
console.log(`El dominio es: ${email2.substr(email2.indexOf('.', pos) + 1, email2.length)}`);
// Solución
email2 = email2.slice(email2.indexOf('@', pos) + 1); // elimino la parte del nombre del usuario
console.log(`El dominio es: ${email2.substr(email2.indexOf('.', pos) + 1)}`);

console.log("----------codePointAt() y fromCodePoint()----------");
// Comparando cadenas
console.log('a' > 'Z'); // true
console.log('Österreich' > 'Zealand'); // true

// mayúsculas y minúsculas tienen códigos diferentes
console.log("Z".codePointAt(0)); // 90
console.log("z".codePointAt(0)); // 122
console.log("z".codePointAt(0).toString(16)); // 7a (si necesitamos el valor del código en hexadecimal)

console.log(String.fromCodePoint(90)); // Z
console.log(String.fromCodePoint(0x5a)); // Z (también podemos usar un valor hexa como argumento)

let tabla = '';
for (let i = 'A'.charCodeAt(0); i <= 'Ü'.charCodeAt(0); i++) {
    tabla += String.fromCodePoint(i);
}
console.log(tabla);
// salida:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ