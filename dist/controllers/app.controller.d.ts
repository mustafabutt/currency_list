import { AppService } from '../services/app.service';
import { Product } from '../interfaces/product.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getProducts(): Promise<Product[]>;
    getIpAddress(): Promise<Product[]>;
}
