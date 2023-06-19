import { Injectable } from "@nestjs/common";
import { ProductDTO, ProductUpdateDTO } from "./seller.dto";

@Injectable()
export class SellerService{
    getSindex(): string{
        return "Hello Seller!!";
    }

    addProduct(data: ProductDTO): string{
        return "Item Added";
    }

    getProductbyId(id: number): object{
        return ({ProductName: "Mobile", ProductPrice: 9000, ProductQuantity: 100, ProductId: 101})
    }

    getProductbyName(myProduct: ProductDTO): string{
        return myProduct.ProductName;
    }

    updateProduct(data: ProductUpdateDTO): object{
        return data;
    }

    updateProductbyID(ProductID: number, data: ProductDTO): object{
        return data;
    }

    deleteProductById(id: number): string {
        return `Product with ID ${id} deleted successfully`;
    }
    
    deleteProductByName(name: string): string {
        return `Product with name ${name} deleted successfully`;
    }
}