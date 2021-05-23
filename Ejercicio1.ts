import {Autor} from './Autor'
import {Nota} from './Nota'

var autor1 = new Autor()
autor1.setNombre('Federico')
autor1.setApellido('Moscardo')
autor1.setGeneroEscritura('Espectaculo')
autor1.setCantidadPublicaciones(8)

var autor2 = new Autor()
autor2.setNombre('Juan')
autor2.setApellido('Quattordio')
autor2.setGeneroEscritura('Internacionales')
autor2.setCantidadPublicaciones(10)

var notas = []

var nota1 = new Nota()
nota1.setTitulo('Estreno nueva temporada en NETFLIX: Quién mató a Sara')
nota1.setAutor(autor1)
nota1.setCuerpoNota('...')
nota1.setFechaPublicacion('10/05/2021')
notas.push(nota1)

var nota2 = new Nota()
nota2.setTitulo('Fecha lanzamiento: 4ta temporada de La casa de papel')
nota2.setAutor(autor1)
nota2.setCuerpoNota('...')
nota2.setFechaPublicacion('20/05/2021')
notas.push(nota2)

var nota3 = new Nota()
nota3.setTitulo('Novadedes sobre coronavirus en Europa')
nota3.setAutor(autor2)
nota3.setCuerpoNota('...')
nota3.setFechaPublicacion('21/05/2021')
notas.push(nota3)
/**
for (let i = 0; i < notas.length; i++){
    console.log(notas[i].getTitulo())
}
*/

var listaDeNotas = notas.filter(notas => notas.autor === autor1)
console.log(listaDeNotas)