"use strict";
exports.__esModule = true;
var LibretaDeNotas = /** @class */ (function () {
    function LibretaDeNotas() {
        this.libretaDeNotas = [];
        this.libretaDeNotasFiltrada = [];
    }
    LibretaDeNotas.prototype.agregarNota = function (nota) {
        this.libretaDeNotas.push(nota);
    };
    LibretaDeNotas.prototype.filtrarLibretaPorAutor = function (autor) {
        this.libretaDeNotasFiltrada = this.libretaDeNotas.filter(function (libretaDeNotas) { return libretaDeNotas.getAutor() === autor; });
    };
    LibretaDeNotas.prototype.getLibretaDeNotasFiltrada = function () {
        return this.libretaDeNotasFiltrada;
    };
    LibretaDeNotas.prototype.getLibretaDeNotasCompleta = function () {
        return this.libretaDeNotas;
    };
    return LibretaDeNotas;
}());
exports["default"] = LibretaDeNotas;
