"use strict";
exports.__esModule = true;
var Nota = /** @class */ (function () {
    function Nota(autor) {
        this.autor = autor;
        this.titulo = new String;
        this.cuerpoNota = new String;
        this.fechaPublicacion = new String;
    }
    Nota.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
        return this;
    };
    Nota.prototype.setAutor = function (autor) {
        this.autor = autor;
        return this;
    };
    Nota.prototype.setCuerpoNota = function (cuerpoNota) {
        this.cuerpoNota = cuerpoNota;
        return this;
    };
    Nota.prototype.setFechaPublicacion = function (fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
        return this;
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
exports["default"] = Nota;
