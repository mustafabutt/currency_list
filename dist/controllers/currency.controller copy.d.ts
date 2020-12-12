import { AppService } from '../services/app.service';
import { Product } from '../interfaces/product.interface';
import { ProductDto } from "../DTOs/product-dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getProducts(): Promise<Product[]>;
    deleteRecord(id: string): Promise<Product>;
    create(body: Product): Promise<Product>;
    editRecord(id: string, updatePerson: ProductDto): Promise<Product>;
}
