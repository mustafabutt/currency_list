import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  priceUSD: Number,
  photos: [],
});