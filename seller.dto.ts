import { IsNumber, IsString } from "class-validator";

export class ProductDTO {
    @IsString({ message: 'Product Name must be a string' })
    ProductName: string;
  
    @IsNumber({}, { message: 'Product Price must be a Numerical Value' })
    ProductPrice: number;
  
    @IsNumber({}, { message: 'Product Quantity must be a Numerical Value' })
    ProductQuantity: number;
  
    @IsString({ message: 'Product ID must be a string' })
    ProductId: string;
  }

export class ProductUpdateDTO{
    @IsString({ message: 'Product Name must be a string' })
    ProductName: string;
  
    @IsNumber({}, { message: 'Product Price must be a Numerical Value' })
    ProductPrice: number;
  
    @IsNumber({}, { message: 'Product Quantity must be a Numerical Value' })
    ProductQuantity: number;
  
    @IsString({ message: 'Product ID must be a string' })
    ProductId: string;
}