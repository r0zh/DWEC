"use strict"

console.log("----------NÚMEROS (NUMBER)----------");
// Infinity and NaN
console.log( 1 / 0 ); // Infinity
console.log( "no es un número" / 2 ); // NaN, tal división es errónea
// JavaScript no está tipado (fuertemente tipado) 
// Puedo definir una variable 'string' y luego asignar un número
let message = "hola";
console.log(typeof (message)); // string
message = 123456;
console.log(typeof (message)); // number
console.log(message);

console.log("----------DECIMALES----------");
// Los números son enteros o de coma flotante (reales)
let n = 123;
n = 12.345;
console.log(n);

console.log("----------ERROR (MAXIMO)----------");
// Tienen un límite
let m = 9007199254740991;
console.log(m);
console.log(`m + 1= ${m + 1}`); // 9007199254740992
console.log(`m + 2= ${m + 2}`); // 9007199254740992

console.log("----------MAS GRANDE----------");
// BigInt 'n al final'
const mx = 1234567890123456789012345678901234567890n;
console.log(mx);
console.log(mx + 1n); // 1234567890123456789012345678901234567891
console.log(mx + 2n); // 1234567890123456789012345678901234567892

console.log("----------PRUEBA EN CLASE----------");
// SUPERANDO EL LÍMITE
let grande1 = 9007199254740991;
let grande2 = 9007199254740991;
let mGrande1 = grande1 + 'n';
console.log(mGrande1);
let mGrande2 = grande2 + 'n';
console.log(mGrande2);
console.log(`La suma de los grandes es: ${parseInt(mGrande1) + parseInt(mGrande2)}`);

console.log("----------REPRESENTACION DECIMAL----------");
// Representaciones decimales
let billion = 1000000000; // tambien puede escribirse 1_000_000_000;
billion = 1e9;
console.log(billion); // for spanish: thousand of millions

let mcs = 0.000001;
mcs = 1e-6;
console.log(mcs);

console.log("----------HEXADECIMAL, BINARIO, OCTAL----------");
// Representaciones hexadecimales
let hexadecimal = 0xFF; // hexadecimal de 255
// Representaciones octales
let octal = 0o377; // octal de 255
// Representaciones binarias
let binario = 0b11111111; // binario de 255
console.log(hexadecimal);
console.log(octal);
console.log(binario);
console.log((hexadecimal == binario) == (binario == octal));
// console.log(((hexadecimal == binario) == octal)); // ¿FUNCIONARÍA?
//              (        true          )  == octal
console.log(`La suma de los tres es: ${hexadecimal + octal + binario}`);

console.log("----------parseInt(numero, base)----------");
let cadenaHexa = "FF";
let cadenaOctal = "377";
let cadenaBinaria = "11111111";
console.log(`Conversión a decimal: ${parseInt(cadenaHexa, 16)}`);  // en base 16: ff
console.log(`Conversión a decimal: ${parseInt(cadenaOctal, 8)}`);  // en base 8: 377
console.log(`Conversión a decimal: ${parseInt(cadenaBinaria, 2)}`);   // en bae 2: 11111111
console.log("----------***********----------");
console.log(`Conversión a entero: ${parseInt(cadenaHexa)}`); // Hexadecimal no tiene una expresión numérica
console.log(`Conversión a entero: ${parseInt(cadenaOctal)}`);
console.log(`Conversión a entero: ${parseInt(cadenaBinaria)}`);

console.log("----------parseFloat()----------");
let cadenaNumero = "255.234";
console.log(cadenaNumero);
console.log(parseInt(cadenaNumero));
console.log(parseFloat(cadenaNumero));

console.log("----------toString(base)----------");
let num = 255;
console.log(num);
console.log(num.toString());
console.log(`Conversión a hexadecimal: ${num.toString(16)}`);  // de decimal a base 16
console.log(`Conversión a octal: ${num.toString(8)}`);  // de decimal a base 8
console.log(`Conversión a binario: ${num.toString(2)}`);   // de decimal a base 2
console.log(`Conversión a base 35: ${num.toString(35)}`); // de decimal a base 35

console.log("----------REDONDEAR----------");
let redondear = 5.2;
console.log(Math.floor(redondear)); // redondea hacia abajo
console.log(Math.ceil(redondear)); // redondea hacia arriba
console.log(Math.round(redondear)); // redondea hacia el más cercano
redondear = 5.7;
console.log(Math.round(redondear)); // redondea hacia el más cercano

console.log("----------REDONDEAR EL PUNTO MEDIO----------");
redondear = 5.5;
console.log(Math.floor(redondear)); // redondea hacia abajo
console.log(Math.ceil(redondear)); // redondea hacia arriba
console.log(Math.round(redondear)); // 5.5 está más cerca de 6 que de 5

console.log("----------QUEDARME CON LA PARTE ENTERA----------");
let parteEntera = 1.5432;
console.log(parteEntera);
console.log(Math.trunc(parteEntera)); // no soportado en IE
console.log(Math.floor(parteEntera));
console.log(parseInt(parteEntera));

console.log("----------QUEDARME CON LA PARTE DECIMAL----------");
let parteDecimal = 5.4321;
console.log(parteDecimal);
console.log("0." + parteDecimal.toString().split(".")[1]);
console.log(parseFloat("0." + parteDecimal.toString().split(".")[1]));

console.log("----------¿POR QUÉ TANTO LÍO?----------");
parteDecimal = 5.4321;
console.log(parteDecimal - Math.trunc(parteDecimal)); // 5.4321 - 5 != 0.4321, 0.43210000000000015
console.log(parteDecimal - Math.floor(parteDecimal));
console.log(parteDecimal - parseInt(parteDecimal));

console.log("----------RESULTADOS INESPERADOS (ERRORES DE CÁLCULO)----------");
console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1.toFixed(20)); // 0.10000000000000000555

console.log("----------RESOLVER EL PROBLEMA----------");
let sum = 0.1 + 0.2;

console.log(sum.toFixed(2)); // "0.30"
console.log(+sum.toFixed(2)); // 0.3
console.log(Number(sum.toFixed(1))); // "0.3"
// console.log(Number(sum.toFixed(2))); // 0.3
console.log(Number(parseInt("03")));

console.log("----------FORMATOS DE NÚMERO SEGÚN PAISES----------");
let esNum = new Intl.NumberFormat("es-ES"); // formato español 
let usNum = new Intl.NumberFormat("en-US"); // formato americano 
let numero = 3141567.314;
console.log("formato en español = " + esNum.format(numero));
console.log("formato en inglés/us = " + usNum.format(numero));

