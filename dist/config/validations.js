"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = void 0;
const Joi = require("joi");
exports.validationSchema = Joi.object({
    NODE_ENV: Joi.string().valid("development", "production", "test").required().default("development"),
    PORT: Joi.number().default(3001),
    Database_host: Joi.string().default("'mongodb://localhost:27017/nest'")
});
//# sourceMappingURL=validations.js.map