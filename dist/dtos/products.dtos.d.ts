export declare class CreateProductDto {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    readonly image: string;
}
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
}
export {};
