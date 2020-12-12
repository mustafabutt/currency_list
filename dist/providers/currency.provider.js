"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currenciesProviders = void 0;
const currency_schema_1 = require("../schemas/currency.schema");
exports.currenciesProviders = [
    {
        provide: 'CURRENCIES_MODEL',
        useFactory: (connection) => connection.model('Currencies', currency_schema_1.CurrencySchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=currency.provider.js.map