import { Body, Controller, Param } from '@nestjs/common';
import { Get, Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { ProductoService } from './producto.service';
import { Producto } from  './Producto';
import { Delete } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
 
@Controller('productos')
export class ProductoController {
    constructor(private productoService: ProductoService) { }

    @Get()
    public getProductos(): Producto[] {
        return this.productoService.getProductos();
    }

    @Get(`:index`)
    public getProducto(@Param(`index`) index): Producto{
        return this.productoService.getProducto(parseInt(index));
    }

    @Post()
    create (@Body() prod: any ): string {
        return this.productoService.create(prod); 
    }

    @Delete(":index")
    public deleteProducto(@Param("index") index) :boolean{
        return this.productoService.deleteProducto(parseInt(index));
    }
    
    @Put()
    public updateProducto(@Body() prod: any, @Param("index")index) :boolean{
        return this.productoService.updateProducto(parseInt(index),prod);
    } 
}
