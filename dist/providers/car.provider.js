"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carProviders = void 0;
const car_schema_1 = require("../schemas/car.schema");
exports.carProviders = [
    {
        provide: 'CAR_MODEL',
        useFactory: (connection) => connection.model('Car', car_schema_1.CarSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=car.provider.js.map