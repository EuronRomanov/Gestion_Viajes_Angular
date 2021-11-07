export class Users {
    private nombre!:string;
    private apellido!:string;
    private adress!:string;
    private  password!:string;
    private observacion!:string;
    private imagen!:File;

    /**
     *
     */
    /**
     *
     */

   
    constructor(nombre:string,apellido:string,adress:string, password:string,observacion:string,imagen:File) {
       this.nombre=nombre;
       this.apellido=apellido;
       this.adress=adress;
       this.password=password;
       this.observacion=observacion;
       this.imagen=imagen;
        
    }
   
   
    public getNombre() : string {
        return this.nombre;
    }
    
    public getApellido() : string {
        return this.apellido;
    }
    public getAdress() : string {
        return this.adress;
    }
    public getPassword() : string {
        return this.password;
    }
    public getObservacion() : string {
        return this.observacion;
    }
    
    public getImagen() : File{
        return this.imagen;
    }
    
}
