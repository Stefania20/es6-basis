//importar commonjs

//const sumar = require("./sumar");
const colors = require('colors')
//const estudiante = require('./estudiante')

//importar el componente sumar
//import {sumar , restar} from './sumar.js'

//tipos de variable:
//let: crear variables
//let a=15;
//const: constantes
//const b=20;
//destructurar objeto;
/*let{nombre , apellido, id, altura} = estudiante
console.log(`id: ${id}`.bgMagenta)
console.log(`nombre: ${nombre}`.bgMagenta)
console.log(`apellido: ${apellido}`.bgMagenta)
console.log(`altura: ${altura}`.bgMagenta)*/

const materias = require('./materias')
//recorrido de arreglo
materias.forEach((materia)=>{
    if(materia.instructor === 'Cristian Buitrago'){
        console.log(`nombre:${materia.instructor}`.bgMagenta)
        console.log(`nombre:${materia.notas}`.bgBlue)
    }
})

//map: metodo de arreglos es6
//crear un arreglo apartir de otro
const profesores = materias.map((materia)=>{
    return materia.instructor
})

console.log(profesores)

//find : localizar elementos de uno o varios arreglo
// que cumplan cierta condicion
const PHP = materias.filter((materia)=>{
    return materia.instructor === "Cristian Buitrago"
})
console.log(PHP)