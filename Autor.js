"use strict";
exports.__esModule = true;
exports.Autor = void 0;
var Autor = /** @class */ (function () {
    function Autor() {
        this.nombre = new String;
        this.apellido = new String;
        this.generoEscritura = new String;
        this.cantidadPublicaciones = new Number;
    }
    Autor.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Autor.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Autor.prototype.setGeneroEscritura = function (generoEscritura) {
        this.generoEscritura = generoEscritura;
    };
    Autor.prototype.setCantidadPublicaciones = function (cantidadPublicaciones) {
        this.cantidadPublicaciones = cantidadPublicaciones;
    };
    Autor.prototype.getNombre = function () {
        return this.nombre;
    };
    Autor.prototype.getApellido = function () {
        return this.apellido;
    };
    Autor.prototype.getGeneroEscritura = function () {
        return this.generoEscritura;
    };
    Autor.prototype.getCantidadPublicaciones = function () {
        return this.cantidadPublicaciones;
    };
    return Autor;
}());
exports.Autor = Autor;
