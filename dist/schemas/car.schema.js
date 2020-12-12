"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarSchema = void 0;
const mongoose = require("mongoose");
exports.CarSchema = new mongoose.Schema({
    name: String,
    number: Number,
    color: String,
});
//# sourceMappingURL=car.schema.js.map