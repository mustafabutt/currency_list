import { Model } from 'mongoose';
import { Curency } from "../interfaces/currency.interface";
export declare class CurrencyService {
    private currenciesModel;
    private readonly currency;
    constructor(currenciesModel: Model<Curency>);
    getHello(): [string];
    getCurrencies(): Promise<Curency[]>;
}
