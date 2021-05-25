"use strict";
exports.__esModule = true;
var Autor = /** @class */ (function () {
    function Autor() {
        this.nombre = new String;
        this.apellido = new String;
        this.generoEscritura = new String;
        this.cantidadPublicaciones = new Number;
    }
    Autor.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
        return this;
    };
    Autor.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
        return this;
    };
    Autor.prototype.setGeneroEscritura = function (generoEscritura) {
        this.generoEscritura = generoEscritura;
        return this;
    };
    Autor.prototype.setCantidadPublicaciones = function (cantidadPublicaciones) {
        this.cantidadPublicaciones = cantidadPublicaciones;
        return this;
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
    Autor.prototype.getNombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    };
    return Autor;
}());
exports["default"] = Autor;
