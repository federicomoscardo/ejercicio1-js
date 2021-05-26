import Autor from "./Autor"

class Nota{
    private titulo : String
    private autor : Autor
    private cuerpoNota : String
    private fechaPublicacion : String

    constructor(autor : Autor){
        this.autor = autor
        this.titulo = new String
        this.cuerpoNota = new String
        this.fechaPublicacion = new String
    }

    public setTitulo(titulo : String){
        this.titulo = titulo
        return this
    }

    public setAutor(autor : Autor){
        this.autor = autor
        return this
    }

    public setCuerpoNota(cuerpoNota : String){
        this.cuerpoNota = cuerpoNota
        return this
    }

    public setFechaPublicacion(fechaPublicacion : String){
        this.fechaPublicacion = fechaPublicacion
        return this
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

}

export default Nota