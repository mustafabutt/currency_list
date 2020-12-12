import { Model } from 'mongoose';
import { Injectable,Inject } from '@nestjs/common';

import {Curency} from "../interfaces/currency.interface"

@Injectable()
export class CurrencyService {
  private readonly currency : Curency[] = [];

  constructor(
    @Inject('CURRENCIES_MODEL')
    private currenciesModel : Model<Curency>
  ) {}

  getHello(): [string] {
    return ['Hello Mustafa!'];
  }
  async getCurrencies():Promise<Curency[]>{
    return await this.currenciesModel.find().exec();
  }

}
