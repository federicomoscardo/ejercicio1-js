"use strict";
exports.__esModule = true;
exports.LibretaDeNotas = void 0;
var LibretaDeNotas = /** @class */ (function () {
    function LibretaDeNotas() {
    }
    LibretaDeNotas.filtrarLibreta = function (notas, autor) {
        var libretaFiltrada = notas.filter(function (notas) { return notas.autor === autor; });
        return libretaFiltrada;
    };
    return LibretaDeNotas;
}());
exports.LibretaDeNotas = LibretaDeNotas;
