import { ProductsService } from './../services/products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(limit: number, offset: number, brand: string): import("../entities/product.entity").Product[];
    getProductFilter(): string;
    getOne(productId: string): import("../entities/product.entity").Product;
    create(payload: any): any;
    update(id: number, payload: any): import("../entities/product.entity").Product;
    delete(id: number): number;
}
