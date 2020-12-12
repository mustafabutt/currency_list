import {Controller, Get, Post, Body, Delete, Param, Put, HttpCode} from '@nestjs/common';
import { AppService } from '../services/app.service';
import {Product} from '../interfaces/product.interface'
import {ProductDto} from "../DTOs/product-dto"
import {CONST} from "../constants/constants"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(CONST.PRODUCTS)
  @HttpCode(200)
  async getProducts():Promise<Product[]> {
    return await this.appService.getProducts();
  }
  @Get(CONST.GET_IP_ADDRESS)
  @HttpCode(200)
  async getIpAddress():Promise<Product[]> {
    return await this.appService.getIpAddress();
  }
}
