import { Model } from 'mongoose';
import { Product } from '../interfaces/product.interface';
import { ProductDto } from "../DTOs/product-dto";
export declare class AppService {
    private productModel;
    private readonly product;
    constructor(productModel: Model<Product>);
    create(ProductDto: ProductDto): Promise<Product>;
    getHello(): string;
    getProducts(): Promise<Product[]>;
    deleteRecord(id: any): Promise<Product>;
    editRecord(id: any, body: any): Promise<Product>;
}
