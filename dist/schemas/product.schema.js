"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    name: String,
    priceUSD: Number,
    photos: [],
});
//# sourceMappingURL=product.schema.js.map