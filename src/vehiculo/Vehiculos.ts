export class Vehiculos{
    private marca: string;
    private modelo: number;
    private patente: string;
    private color: string;
    private id: string;

    constructor(id: string,marca: string, modelo: number, patente: string, color: string ){
        this.marca=marca;
        this.modelo=modelo;
        this.patente=patente;
        this.color=color;
        this.id=id;
    }


    public getMarca(): string{
        return this.marca;
    }


    public getModelo(): number{
        return this.modelo;
    }

    public getPatente(): string{
        return this.patente;
    }

    public getColor(): string{
        return this.color;
    }

    public getId(): string{
        return this.id;
    }
}