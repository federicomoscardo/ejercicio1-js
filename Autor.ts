class Autor {
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
        return this
    }

    public setApellido(apellido: String){
        this.apellido = apellido
        return this
    }

    public setGeneroEscritura(generoEscritura: String){
        this.generoEscritura = generoEscritura
        return this
    }

    public setCantidadPublicaciones(cantidadPublicaciones: Number){
        this.cantidadPublicaciones = cantidadPublicaciones
        return this
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

    public getNombreCompleto() : String {
        return this.nombre + ' ' + this.apellido
    }

    
}

export default Autor



