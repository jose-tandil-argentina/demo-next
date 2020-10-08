import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Controller, Get } from '@nestjs/common';
import { ProductoService } from './producto/producto.service';
import { ProductoController } from './producto/producto.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..',
    'client'),
    }),
   
  ],
  controllers: [AppController,ProductoController],
  providers: [AppService,ProductoService],
})
export class AppModule {}
