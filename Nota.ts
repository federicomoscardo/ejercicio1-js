import {Autor} from "./Autor"

export class Nota{
    private titulo : String
    private autor : Autor
    private cuerpoNota : String
    private fechaPublicacion : String

    constructor(){
        this.titulo = new String
        this.autor = new Autor
        this.cuerpoNota = new String
        this.fechaPublicacion = new String
    }

    public setTitulo(titulo : String){
        this.titulo = titulo
    }

    public setAutor(autor : Autor){
        this.autor = autor
    }

    public setCuerpoNota(cuerpoNota : String){
        this.cuerpoNota = cuerpoNota
    }

    public setFechaPublicacion(fechaPublicacion : String){
        this.fechaPublicacion = fechaPublicacion
    }

    public getTitulo() : String{
        return this.titulo
    }

    public getAutor() : Autor{
        return this.autor
    }

    public getCuerpoNota() : String{
        return this.cuerpoNota
    }

    public getFechaPublicacion() : String{
        return this.fechaPublicacion
    }

    /**
    public agregarALibretaDeNotas(nota : Nota, libretaDeNotass : Nota[]) : Nota[]{
        libretaDeNotass.push(nota)
        return libretaDeNotass
    }
    */
}