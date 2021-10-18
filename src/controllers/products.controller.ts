import {
    Controller,
    Get,
    Query,
    Param,
    Post,
    Body,
    Put,
    Delete,
    HttpCode,
    HttpStatus,
    Res,
    ParseIntPipe
} from '@nestjs/common';

import { Response } from 'express';

import { ProductsService } from './../services/products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) { }
    @Get()
    getProducts(
      @Query('limit') limit = 100,
      @Query('offset') offset = 0,
      @Query('brand') brand: string,
    ) {
      // return {
      //   message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
      // };
      return this.productsService.findAll();
    }

    @Get('filter')
    getProductFilter() {
        return `yo soy un filter`;
    }

    @Get(':productId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Param('productId') productId: string) {
        /* response.status(200).send({
           message: `product ${productId}`
        }); */
        return this.productsService.findOne(+productId);
    }

    @Post()
    create(@Body() payload: any) {
        /* return {
            message: 'accion de crear',
            payload,
        }; */
        return this.productsService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
        return this.productsService.update(+id, payload);
        /*  return {
             id,
             payload,
         }; */
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return id;
    }
}