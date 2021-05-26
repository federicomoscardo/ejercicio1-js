import Autor from './Autor'
import Nota from './Nota'
import LibretaDeNotas from './Libreta-de-Notas'


// Instanciamiento de Autores
//------------------------------------------------------------------------------------------------------------
var autor1 = new Autor()
    .setNombre('Federico')
    .setApellido('Moscardo')
    .setGeneroEscritura('Espectaculo')
    .setCantidadPublicaciones(8)

var autor2 = new Autor()
    .setNombre('Juan')
    .setApellido('Quattordio')
    .setGeneroEscritura('Internacionales')
    .setCantidadPublicaciones(10)

//------------------------------------------------------------------------------------------------------------

//Genero una instancia de Libreta de Notas
let libretaDeNotas = new LibretaDeNotas()

//Instanciamiento de Notas
//------------------------------------------------------------------------------------------------------------
var nota1 = new Nota(autor1)
    .setTitulo('Estreno temporada en NETFLIX: Quién mató a Sara')
    .setCuerpoNota('...')
    .setFechaPublicacion('10/05/2021')

libretaDeNotas.agregarNota(nota1)

var nota2 = new Nota(autor1)
    .setTitulo('Fecha lanzamiento: 4ta temporada de La casa de papel')
    .setCuerpoNota('...')
    .setFechaPublicacion('20/05/2021')

    libretaDeNotas.agregarNota(nota2)

var nota3 = new Nota(autor2)
    .setTitulo('Novadedes sobre coronavirus en Europa')
    .setCuerpoNota('...')
    .setFechaPublicacion('21/05/2021')

libretaDeNotas.agregarNota(nota3)
//------------------------------------------------------------------------------------------------------------

console.log('\nEsta es la libreta de Notas Completa')
//Muestro en consola Título de Nota y Autor
for (let i = 0; i < libretaDeNotas.getLibretaDeNotasCompleta().length; i++){
    console.log('  - ' + libretaDeNotas.getLibretaDeNotasCompleta()[i].getTitulo() + ' - Autor: ' + libretaDeNotas.getLibretaDeNotasCompleta()[i].getAutor().getNombreCompleto())
}

//Filtro libretaDeNotas por "autor2"
libretaDeNotas.filtrarLibretaPorAutor(autor2)

console.log('\nEsta es la libreta de Notas Filtrada')
//Muestro en consola Título de Nota y Autor de la lista filtrada
for (let i = 0; i < libretaDeNotas.getLibretaDeNotasFiltrada().length; i++){
    console.log('  - ' + libretaDeNotas.getLibretaDeNotasFiltrada()[i].getTitulo() + ' - Autor: ' + libretaDeNotas.getLibretaDeNotasFiltrada()[i].getAutor().getNombreCompleto())
}



