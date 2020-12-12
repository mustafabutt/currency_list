import { CurrencyService } from '../services/currency.service';
import { Curency } from '../interfaces/currency.interface';
export declare class CurrencyController {
    private readonly CurrencyService;
    constructor(CurrencyService: CurrencyService);
    getCurrencies(): Promise<Curency[]>;
}
