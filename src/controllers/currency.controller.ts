import {Controller, Get, Post, Body, Delete, Param, Put, HttpCode} from '@nestjs/common';

import {CurrencyService} from '../services/currency.service'
import {Curency} from '../interfaces/currency.interface'
import {CurrencyDto} from "../DTOs/currency-dto"
import {CONST} from "../constants/constants"

@Controller()
export class CurrencyController {
  constructor(private readonly CurrencyService: CurrencyService) {}

  @Get(CONST.CURRENCIES)
  @HttpCode(200)
  async getCurrencies():Promise<Curency[]> {
    return await this.CurrencyService.getCurrencies();
  }


}
