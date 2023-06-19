import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { SellerService } from "./seller.service";
import { ProductDTO, ProductUpdateDTO } from "./seller.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('seller')
export class SellerController{
    constructor(private readonly sellerService: SellerService){}
    @Get('/sellerindex')
    getSindex(): any {
        return this.sellerService.getSindex();
    }

    @Post('/addProduct')
    @UsePipes(new ValidationPipe())
    addProduct(@Body() data:ProductDTO): string {
        return this.sellerService.addProduct(data);
    }

    @Get('/search/:id')
    getProductbyId(@Param() id:number): any {
        return this.sellerService.getProductbyId(id);
    }

    @Get('/search')
    getProductbyName(@Query() qry:ProductDTO): string {
        return this.sellerService.getProductbyName(qry);
    }

    @Put('/updateProduct')
    updateProduct(@Body() data:ProductUpdateDTO): object{
        return this.sellerService.updateProduct(data);
    }

    @Put('/updateProduct/:ProductID')
    @UsePipes(new ValidationPipe())
    updateProductbyID(@Param() ProductID:number, @Body() data:ProductDTO): object{
        return this.sellerService.updateProductbyID(ProductID, data);
    }

    @Delete('/deleteProduct/:id')
    deleteProductById(@Param('id') id: number): string {
      return this.sellerService.deleteProductById(id);
    }
  
    @Delete('/deleteProduct')
    deleteProductByName(@Query('name') name: string): string {
      return this.sellerService.deleteProductByName(name);
    }
/*
    @Post('/uploadProductImage')
    @UseInterceptors(FileInterceptor('ProductImage', {
        fileFilter: (req, file, cb) {
            if(file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
            cb(null, Date.now()+file.originalname)
        },
    }))
*/
}