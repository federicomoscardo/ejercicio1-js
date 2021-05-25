import Autor from "./Autor"
import Nota from "./Nota"

class LibretaDeNotas{
    private libretaDeNotas : Array<Nota> = []
    private libretaDeNotasFiltrada : Array<Nota> = []
    
    public agregarNota(nota : Nota) {
        this.libretaDeNotas.push(nota)
    }
    
    public filtrarLibretaPorAutor(autor : Autor){
        this.libretaDeNotasFiltrada = this.libretaDeNotas.filter(libretaDeNotas => libretaDeNotas.getAutor() === autor)
    }

    public getLibretaDeNotasFiltrada() : Nota[] {
        return this.libretaDeNotasFiltrada
    }

    public getLibretaDeNotasCompleta() : Nota[] {
        return this.libretaDeNotas
    }
}

export default LibretaDeNotas