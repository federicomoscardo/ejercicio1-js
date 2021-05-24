import {Autor} from "./Autor"

export class LibretaDeNotas{
    
    public static filtrarLibreta(notas, autor : Autor) : []{
        var libretaFiltrada = notas.filter(notas => notas.autor === autor)
        return libretaFiltrada
    }
}