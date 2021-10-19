"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor() {
        this.counterId = 1;
        this.products = [
            {
                id: 1,
                name: 'Product 1',
                description: 'bla bla',
                price: 122,
                image: '',
                stock: 12,
            },
        ];
    }
    findAll() {
        return this.products;
    }
    findOne(id) {
        const product = this.products.find((item) => item.id === id);
        if (!product) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        else {
            return product;
        }
    }
    create(payload) {
        console.log(payload);
        this.counterId = this.counterId + 1;
        const newProduct = Object.assign({ id: this.counterId }, payload);
        this.products.push(newProduct);
        return newProduct;
    }
    update(id, payload) {
        const product = this.findOne(id);
        if (product) {
            const index = this.products.findIndex((item) => item.id === id);
            this.products[index] = Object.assign(Object.assign({}, product), payload);
            return this.products[index];
        }
        return null;
    }
    remove(id) {
        const index = this.products.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        this.products.splice(index, 1);
        return true;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map