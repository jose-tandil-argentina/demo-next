import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Producto } from "src/producto/Producto"



@Injectable()
export class ProductoService {
    [x: string]: any;
    deleteProducto(arg0: number): boolean {
        throw new Error('Method not implemented.');
    }
    private listaProductos: Producto[];

    private loadProductos(): void {
        let archivo = fs.readFileSync(`resources/productos.csv`, `utf8`);
        const elementos = archivo.split(`\n`).map(p => p.replace(`\r`, ``)).map(p => p.split(`,`));
        this.listaProductos = [];
        for (let i = 0; i < elementos.length; i++) {
            let producto = new Producto(elementos[i][0],
                parseInt(elementos[i][1]));
            this.listaProductos.push(producto);
        }

    }

    public getProductos(): Producto[] {
        this.loadProductos();
        return this.listaProductos;
    }



    public getProducto(index: number): Producto {
        if (index < 0 || index >= this.listaProductos.length)
            return null;
        return this.listaProductos[index];
    }

    public create(prod: any) {
        console.log(prod);
        const producto = new Producto(prod.nombreProducto, prod.precio);
        if (producto.getNombreProducto() && producto.getPrecio()) {
            fs.appendFileSync("resources/productos.csv",
                "\n" +
                producto.getNombreProducto() + ","
                + producto.getPrecio());
            return "ok";
        }else{
            return "parametros incorrectos";
        }
    }



    public deleteProduto(index: number): boolean{
        let borrado = this.listaProductos.splice(index,1);[]
        return borrado.length==1;
    }

    
    public updateProducto(pos: number, prod: any): boolean {
        const producto = new Producto(prod.nombreProducto, prod.precio);
        this.listaProductos[pos] = producto;
        return true;
    }

/*    public updateProducto(pos : number, prod :Producto): boolean{
        const producto = new Producto(prod.nombreProducto, prod.precio);
        this.listaProductos[pos] = producto;
        return true;
    }
*/

}



/*let texto: string = fs.readFileSync('C:\\Users\\jm.perez\\Documents\\Backend\\cfp-demo\\src\\producto\\abs.txt', 'utf8');

let palabras: string[] = texto.split('\n');
let textoFinal = [];

for (let i = 0; i < palabras.length; i++) {
    textoFinal[i] = palabras[i].split(",");
}

console.log(palabras);
*/


////////

/* listaProductos: any[]; create(prod: any): string {
       throw new Error('Method not implemented.');
   }
   private static readonly CANTIDAD_PRODUCTOS = 10;
   public getProducto(): any {
       let productos = [];
       for (let i = 0; i < ProductoService.CANTIDAD_PRODUCTOS; i++) {
           let producto = {
               'producto': textoFinal[i][0],
               'precio': textoFinal[i][1],
               'descripcion': textoFinal[i][2],
           };
           productos.push(producto);
       }
       return productos;
   }

*/
//////////////////////////////////////////////


/*
    public getProductos(): Productos[] {
        this.loadProductos();
        return this.listaProductos;
    }

    public getProducto(index: number): Producto {
        if (index < 0 || index >= this.listaProductos.length)
            return null;
        return this.listaProductos[index];
    }



    public create(prod: any) {
        console.log(prod);
        const producto = new Producto(prod.nombreProducto, prod.precio);
        if (producto.getNombreProducto() && producto.getPrecio) {
            fs.appendFileSync("productos.csv",
                "\n" +
                producto.getNombreProduto() + ","
                + producto.getPrecio());
            return "ok";
        }else{
            return "parametros incorrectos";
        }
    }
}*/