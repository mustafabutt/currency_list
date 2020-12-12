"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boyProviders = void 0;
const person_schema_1 = require("./schemas/person.schema");
exports.boyProviders = [
    {
        provide: 'BOY_MODEL',
        useFactory: (connection) => connection.model('Boy', person_schema_1.BoySchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=persons.providers.js.map