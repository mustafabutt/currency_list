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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyController = void 0;
const common_1 = require("@nestjs/common");
const currency_service_1 = require("../services/currency.service");
const constants_1 = require("../constants/constants");
let CurrencyController = class CurrencyController {
    constructor(CurrencyService) {
        this.CurrencyService = CurrencyService;
    }
    async getCurrencies() {
        return await this.CurrencyService.getCurrencies();
    }
};
__decorate([
    common_1.Get(constants_1.CONST.CURRENCIES),
    common_1.HttpCode(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "getCurrencies", null);
CurrencyController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [currency_service_1.CurrencyService])
], CurrencyController);
exports.CurrencyController = CurrencyController;
//# sourceMappingURL=currency.controller.js.map