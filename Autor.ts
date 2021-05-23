export class Autor {
    private nombre: String
    private apellido: String
    private generoEscritura: String
    private cantidadPublicaciones: Number

    constructor(){
        this.nombre = new String
        this.apellido = new String
        this.generoEscritura = new String
        this.cantidadPublicaciones = new Number
    }

    public setNombre(nombre: String){
        this.nombre = nombre
    }

    public setApellido(apellido: String){
        this.apellido = apellido
    }

    public setGeneroEscritura(generoEscritura: String){
        this.generoEscritura = generoEscritura
    }

    public setCantidadPublicaciones(cantidadPublicaciones: Number){
        this.cantidadPublicaciones = cantidadPublicaciones
    }

    public getNombre() : String{
        return this.nombre
    }

    public getApellido() : String{
        return this.apellido
    }

    public getGeneroEscritura() : String{
        return this.generoEscritura
    }

    public getCantidadPublicaciones() : Number{
        return this.cantidadPublicaciones
    }

    
}



