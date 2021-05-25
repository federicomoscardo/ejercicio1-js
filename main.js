"use strict";
exports.__esModule = true;
var Autor_1 = require("./Autor");
var Nota_1 = require("./Nota");
var Libreta_de_Notas_1 = require("./Libreta-de-Notas");
// Instanciamiento de Autores
//------------------------------------------------------------------------------------------------------------
var autor1 = new Autor_1["default"]()
    .setNombre('Federico')
    .setApellido('Moscardo')
    .setGeneroEscritura('Espectaculo')
    .setCantidadPublicaciones(8);
var autor2 = new Autor_1["default"]()
    .setNombre('Juan')
    .setApellido('Quattordio')
    .setGeneroEscritura('Internacionales')
    .setCantidadPublicaciones(10);
//------------------------------------------------------------------------------------------------------------
//Genero una instancia de Libreta de Notas
var libretaDeNotas = new Libreta_de_Notas_1["default"]();
//Instanciamiento de Notas
//------------------------------------------------------------------------------------------------------------
var nota1 = new Nota_1["default"]()
    .setTitulo('Estreno temporada en NETFLIX: Quién mató a Sara')
    .setAutor(autor1)
    .setCuerpoNota('...')
    .setFechaPublicacion('10/05/2021');
libretaDeNotas.agregarNota(nota1);
var nota2 = new Nota_1["default"]()
    .setTitulo('Fecha lanzamiento: 4ta temporada de La casa de papel')
    .setAutor(autor1)
    .setCuerpoNota('...')
    .setFechaPublicacion('20/05/2021');
libretaDeNotas.agregarNota(nota2);
var nota3 = new Nota_1["default"]()
    .setTitulo('Novadedes sobre coronavirus en Europa')
    .setAutor(autor2)
    .setCuerpoNota('...')
    .setFechaPublicacion('21/05/2021');
libretaDeNotas.agregarNota(nota3);
//------------------------------------------------------------------------------------------------------------
console.log('\nEsta es la libreta de Notas Completa');
//Muestro en consola Título de Nota y Autor
for (var i = 0; i < libretaDeNotas.getLibretaDeNotasCompleta().length; i++) {
    console.log('  - ' + libretaDeNotas.getLibretaDeNotasCompleta()[i].getTitulo() + ' - Autor: ' + libretaDeNotas.getLibretaDeNotasCompleta()[i].getAutor().getNombreCompleto());
}
//Filtro libretaDeNotas por "autor2"
libretaDeNotas.filtrarLibretaPorAutor(autor2);
console.log('\nEsta es la libreta de Notas Filtrada');
//Muestro en consola Título de Nota y Autor de la lista filtrada
for (var i = 0; i < libretaDeNotas.getLibretaDeNotasFiltrada().length; i++) {
    console.log('  - ' + libretaDeNotas.getLibretaDeNotasFiltrada()[i].getTitulo() + ' - Autor: ' + libretaDeNotas.getLibretaDeNotasFiltrada()[i].getAutor().getNombreCompleto());
}
