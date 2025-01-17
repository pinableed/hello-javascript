/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Esto es un comentario en una línea.

// 2. Escribe un comentario en varias líneas

/*Esto es
un comentario
en varias líneas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

//STRING  (cadenas de texto)
let variable =  "Unai"
const variable2 = "Unai" //para constantes que no variarán su valor.

//NUMEROS
let edad = 20
let altura = 1.8

//BOOLEAN
let isStudent = false
let isTeacher = true

//UNDEFINED (defino la variable pero no le doy valor, toma el valor undefined)
let varindefinida

//NULL (indico de manera intencionada la ausencia de valor de la variable en ese momento).
let varNull = null

//SYMBOL
let varSymbol = Symbol("mysysmbol")

//BIGINT (cuando es más grande que lo que entra en el number)
let vaBigint = BigInt(1313133131313131314898)


// 4. Imprime por consola el valor de todas las variables
console.log(variable)
console.log(variable2)
console.log(edad)
console.log(altura)
console.log(isStudent)
console.log(isTeacher)
console.log(varindefinida)
console.log(varNull)
console.log(varSymbol)
console.log(vaBigint)


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof variable)
console.log(typeof edad)
console.log(typeof altura)
console.log(typeof isStudent)
console.log(typeof isTeacher)
console.log(typeof varindefinida)
console.log(typeof varNull)
console.log(typeof varSymbol)
console.log(typeof vaBiginit)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse