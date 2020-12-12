"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const constants_1 = require("../constants/constants");
let AppService = class AppService {
    constructor(productModel, http) {
        this.productModel = productModel;
        this.http = http;
        this.product = [];
    }
    async create(ProductDto) {
        const createdCat = new this.productModel(ProductDto);
        return createdCat.save();
    }
    async getIpAddress() {
        return this.http.get(constants_1.CONST.IP_ADDRESS_CALL).pipe(operators_1.map(response => response.data));
    }
    async getProducts() {
        return await this.productModel.find().exec();
    }
    async deleteRecord(id) {
        return this.productModel.findByIdAndDelete(id);
    }
    async editRecord(id, body) {
        return this.productModel.findOneAndUpdate(id, body, { new: true });
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('PRODUCT_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        common_1.HttpService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map