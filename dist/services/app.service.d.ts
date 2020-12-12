import { Model } from 'mongoose';
import { HttpService } from '@nestjs/common';
import { Product } from '../interfaces/product.interface';
import { ProductDto } from "../DTOs/product-dto";
export declare class AppService {
    private productModel;
    private http;
    private readonly product;
    constructor(productModel: Model<Product>, http: HttpService);
    create(ProductDto: ProductDto): Promise<Product>;
    getIpAddress(): Promise<any>;
    getProducts(): Promise<Product[]>;
    deleteRecord(id: any): Promise<Product>;
    editRecord(id: any, body: any): Promise<Product>;
}
