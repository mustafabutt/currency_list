import { Model } from 'mongoose';
import {Injectable, Inject, HttpService} from '@nestjs/common';
import {Product} from '../interfaces/product.interface';
import {ProductDto} from "../DTOs/product-dto"
import {map} from "rxjs/operators";
import {CONST} from "../constants/constants"

@Injectable()
export class AppService {
  private readonly product : Product[] = [];

  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel : Model<Product>,
    private http: HttpService
  ) {}
  async create(ProductDto: ProductDto): Promise<Product> {
    const createdCat = new this.productModel(ProductDto);
    return createdCat.save();
  }


  async getIpAddress():Promise<any>{
     return this.http.get(CONST.IP_ADDRESS_CALL).pipe(
         map(response => response.data)
     );
  }
  async getProducts():Promise<Product[]>{
    return await this.productModel.find().exec();
  }
  async deleteRecord(id) : Promise<Product>{
    return this.productModel.findByIdAndDelete(id);
  }
  async editRecord(id,body): Promise<Product>{
    return this.productModel.findOneAndUpdate(id,body,{new:true})

  }
}
