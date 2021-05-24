"use strict";
exports.__esModule = true;
var Autor_1 = require("./Autor");
var Nota_1 = require("./Nota");
var Libreta_de_Notas_1 = require("./Libreta-de-Notas");
// Instanciamiento de Autores
//------------------------------------------------------------------------------------------------------------
var autor1 = new Autor_1.Autor();
autor1.setNombre('Federico');
autor1.setApellido('Moscardo');
autor1.setGeneroEscritura('Espectaculo');
autor1.setCantidadPublicaciones(8);
var autor2 = new Autor_1.Autor();
autor2.setNombre('Juan');
autor2.setApellido('Quattordio');
autor2.setGeneroEscritura('Internacionales');
autor2.setCantidadPublicaciones(10);
//------------------------------------------------------------------------------------------------------------
//Instanciamiento de Notas
//------------------------------------------------------------------------------------------------------------
//Declaración de las listas de Notas
var libretaDeNotas = [];
var libretaDeNotasFiltrada = [];
var nota1 = new Nota_1.Nota();
nota1.setTitulo('Estreno temporada en NETFLIX: Quién mató a Sara');
nota1.setAutor(autor1);
nota1.setCuerpoNota('...');
nota1.setFechaPublicacion('10/05/2021');
//nota1.agregarALibretaDeNotas(nota1, libretaDeNotas)
libretaDeNotas.push(nota1);
var nota2 = new Nota_1.Nota();
nota2.setTitulo('Fecha lanzamiento: 4ta temporada de La casa de papel');
nota2.setAutor(autor1);
nota2.setCuerpoNota('...');
nota2.setFechaPublicacion('20/05/2021');
//nota2.agregarALibretaDeNotas(nota2, libretaDeNotas)
libretaDeNotas.push(nota2);
var nota3 = new Nota_1.Nota();
nota3.setTitulo('Novadedes sobre coronavirus en Europa');
nota3.setAutor(autor2);
nota3.setCuerpoNota('...');
nota3.setFechaPublicacion('21/05/2021');
//nota3.agregarALibretaDeNotas(nota3, libretaDeNotas)
libretaDeNotas.push(nota3);
//------------------------------------------------------------------------------------------------------------
console.log('\nEsta es la libreta de Notas Completa');
//Muestro en consola Título de Nota y Autor
for (var i = 0; i < libretaDeNotas.length; i++) {
    console.log('  - ' + libretaDeNotas[i].getTitulo() + ' - Autor: ' + libretaDeNotas[i].getAutor().getNombre() + ' ' + libretaDeNotas[i].getAutor().getApellido());
}
//Filtro libretaDeNotas por "autor2", y guardo esa lista en libretaDeNotasFiltrada
libretaDeNotasFiltrada = Libreta_de_Notas_1.LibretaDeNotas.filtrarLibreta(libretaDeNotas, autor2);
console.log('\nEsta es la libreta de Notas Filtrada');
//Muestro en consola Título de Nota y Autor de la lista filtrada
for (var i = 0; i < libretaDeNotasFiltrada.length; i++) {
    console.log('  - ' + libretaDeNotasFiltrada[i].getTitulo() + ' - Autor: ' + libretaDeNotasFiltrada[i].getAutor().getNombre() + ' ' + libretaDeNotasFiltrada[i].getAutor().getApellido());
}
