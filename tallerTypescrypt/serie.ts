export class Serie{
    id: number;
    name:string;
    canal:string;
    temporadas:number;
    descripcion:string;
    web:string;
    imagen:string;


    constructor(id:number, name:string, canal:string,temporadas:number,descripcion:string,web:string,imagen:string)
    {
        this.id = id;
        this.name=name;
        this.canal=canal;
        this.temporadas = temporadas;
        this.descripcion=descripcion;
        this.web=web;
        this.imagen=imagen;

    }

}