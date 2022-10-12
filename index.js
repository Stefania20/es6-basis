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
//crear materia y ponerla en arreglo de materias
//push()
materias.push({
    nombre: "Java",
    instructor: "Jorge Celedon",
    notas: [
        3.4, 4.0
    ],
    tipo:"Tecnica"

})
//recorrido de arreglo
materias.forEach((materia)=>{
   
        console.log(`nombre:${materia.nombre}`.bgMagenta)
        console.log(`instructor:${materia.instructor}`.bgMagenta)
        console.log(`nota:${materia.notas}`.bgMagenta)
        console.log('----------')
    
})
//eliminar materia: splice




//actualizar 
//1. encontrar elemento a actualizar: findIndex
let indice = materias.findIndex((materia)=> materia.instructor ==="Luis Baquero")
console.log(indice)
materias[indice].instructor = "Tatiana Cabrer"

let calificacion = materias.findIndex((materia)=> materia.notas === 4.2) 
console.log(calificacion)
materias[indice].notas = 3.5
console.log(materias)

materias.splice(0,2)
console.log(materias)
//map: metodo de arreglos es6
//crear un arreglo apartir de otro
/*const profesores = materias.map((materia)=>
    return materia.instructor
})

console.log(profesores)

//find : localizar elementos de uno o varios arreglo
// que cumplan cierta condicion
const PHP = materias.filter((materia)=>{
    return materia.instructor === "Cristian Buitrago"
})

//crear nueva materia:

console.log(PHP)*/