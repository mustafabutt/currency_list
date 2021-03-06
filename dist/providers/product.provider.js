"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productProviders = void 0;
const product_schema_1 = require("../schemas/product.schema");
exports.productProviders = [
    {
        provide: 'PRODUCT_MODEL',
        useFactory: (connection) => connection.model('Products', product_schema_1.ProductSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=product.provider.js.map