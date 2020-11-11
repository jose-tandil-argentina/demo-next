import { Injectable } from '@nestjs/common';
import { VehiculoController } from './vehiculo.controller';
import { Vehiculos } from './Vehiculos';
import * as fs from 'fs';

@Injectable()
export class VehiculoService {


    private listavehiculo: Vehiculos[];

    public constructor() {

    }
/*
    private loadVehiculo(): void {
        let archivo = fs.readFileSync(`vehiculos.csv`, `utf8`);
        const elementos = archivo.split(`\n`).map(p => p.replace(`\r`, ``)).map(p => p.split(`,`));
        this.listavehiculo = [];
        elementos.forEach((elem, i) => {
            let vehiculo = new Vehiculos(
                elementos[i][0],
                elementos[i][1],
                elementos[i][2],
                elementos[i][3],
                parseInt(elementos[i][4]),
                parseInt(elementos[i][5])
            );
            this.listavehiculo.push(vehiculo);
        });
    }

    public getVehiculos(): Vehiculos[] {
        this.loadVehiculo();
        return this.listavehiculo;
    }

    public getVehiculo(index: number): Vehiculos {
        if (index < 0 || index >= this.listavehiculo.length)
            return this.listavehiculo[index];
        return null;
    }

    public create(vehiculo: any) {
        let modeloVehiculo = vehiculo["modeloVehiculo"];
        let marcaVehiculo = vehiculo["marcaVehiculo"];
        let patenteVehiculo = vehiculo["patenteVehiculo"];
        let colorVehiculo = vehiculo["colorVehiculo"];

        if (modeloVehiculo && marcaVehiculo && patenteVehiculo & colorVehiculo) {
            let id = null;
            let archivo = fs.readFileSync("vehiculos.csv" + "\n");
            const vehiculo = new Vehiculos(id, marcaVehiculo, modeloVehiculo, patenteVehiculo, colorVehiculo);

            fs.appendFileSync("vehiculos.csv" + "\n" +
                vehiculo.getMarca() + ","
                + vehiculo.getModelo() + ","
                + vehiculo.getPatente() + ","
                + vehiculo.getColor());
            return "ok";
        }
        else
        return "partametros incorrectos";
    }
    public deleteVehiculo(index: number): boolean {
        let borrado = this.listavehiculo.splice(index, 1);
        return borrado.length == 1;
    }

*/
}
