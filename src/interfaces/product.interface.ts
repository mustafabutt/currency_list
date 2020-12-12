import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly priceUSD: number;
  readonly photos: [];
}