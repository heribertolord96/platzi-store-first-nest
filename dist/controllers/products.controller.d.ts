import { ProductsService } from './../services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(limit: number, offset: number, brand: string): import("../entities/product.entity").Product[];
    getProductFilter(): string;
    getOne(productId: number): import("../entities/product.entity").Product;
    create(payload: CreateProductDto): {
        name: string;
        description: string;
        price: number;
        stock: number;
        image: string;
        id: number;
    };
    update(id: number, payload: UpdateProductDto): import("../entities/product.entity").Product;
    delete(id: number): number;
}
