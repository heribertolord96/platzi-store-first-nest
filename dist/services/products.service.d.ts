import { Product } from '../entities/product.entity';
export declare class ProductsService {
    private counterId;
    private products;
    findAll(): Product[];
    findOne(id: number): Product;
    create(payload: any): any;
    update(id: number, payload: any): Product;
    remove(id: number): boolean;
}
