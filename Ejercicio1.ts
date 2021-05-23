import {Autor} from './Autor'
import {Nota} from './Nota'


var autor1 = new Autor()
autor1.setNombre('Federico')
autor1.setApellido('Moscardo')
autor1.setGeneroEscritura('Espectaculo')
autor1.setCantidadPublicaciones(8)

var nota1 = new Nota()
nota1.setTitulo('Estreno nueva temporada en NETFLIX: Quién mató a Sara')
nota1.setAutor(autor1)
nota1.setCuerpoNota('...')
nota1.setFechaPublicacion('10/05/2021')

console.log(nota1.getTitulo())
console.log(nota1.getAutor())
console.log(nota1.getCuerpoNota())
console.log(nota1.getFechaPublicacion())