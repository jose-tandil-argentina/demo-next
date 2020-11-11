import { Controller, Param } from '@nestjs/common';
import { Delete, Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { VehiculoService } from './vehiculo.service';
import { Vehiculos } from './Vehiculos';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';


@Controller('vehiculo')
export class VehiculoController {
    
    constructor(private vehiculosService: VehiculoService){}
/*
    @Get()
    public getVehiculos(): Vehiculo[]{
        return this.vehiculosService.getVehiculos();
    }

    @Get("index")
    public getVehiculo(@Param("index")index): Vehiculo{
        return this.vehiculosService.getVehiculo(index);
    }

    @Post()
    create(@Body() index: any ): string{
        return this.vehiculosService.create(index);
    }

    @Delete("index")
    public deleteVehiculo(@Param("index")index):  boolean{
        return this.vehiculosService.deleteVehiculo(index);
    }
*/
}
