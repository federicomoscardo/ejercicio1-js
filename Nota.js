"use strict";
exports.__esModule = true;
exports.Nota = void 0;
var Autor_1 = require("./Autor");
var Nota = /** @class */ (function () {
    function Nota() {
        this.titulo = new String;
        this.autor = new Autor_1.Autor;
        this.cuerpoNota = new String;
        this.fechaPublicacion = new String;
    }
    Nota.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Nota.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Nota.prototype.setCuerpoNota = function (cuerpoNota) {
        this.cuerpoNota = cuerpoNota;
    };
    Nota.prototype.setFechaPublicacion = function (fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    };
    Nota.prototype.getTitulo = function () {
        return this.titulo;
    };
    Nota.prototype.getAutor = function () {
        return this.autor;
    };
    Nota.prototype.getCuerpoNota = function () {
        return this.cuerpoNota;
    };
    Nota.prototype.getFechaPublicacion = function () {
        return this.fechaPublicacion;
    };
    return Nota;
}());
exports.Nota = Nota;
