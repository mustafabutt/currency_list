"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const database_module_1 = require("./database/database.module");
const app_controller_1 = require("./controllers/app.controller");
const currency_controller_1 = require("./controllers/currency.controller");
const product_provider_1 = require("./providers/product.provider");
const app_service_1 = require("./services/app.service");
const currency_provider_1 = require("./providers/currency.provider");
const currency_service_1 = require("./services/currency.service");
const config_1 = require("@nestjs/config");
const configurations_1 = require("./config/configurations");
const validations_1 = require("./config/validations");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .forRoutes('products');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule,
            common_1.HttpModule,
            config_1.ConfigModule.forRoot({
                envFilePath: '../.env.local',
                isGlobal: true,
                load: [configurations_1.configuration],
                validationSchema: validations_1.validationSchema
            })
        ],
        controllers: [app_controller_1.AppController, currency_controller_1.CurrencyController],
        providers: [app_service_1.AppService, currency_service_1.CurrencyService,
            ...product_provider_1.productProviders,
            ...currency_provider_1.currenciesProviders
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map