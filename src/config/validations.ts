import * as Joi from "joi";

export const validationSchema = Joi.object({
  NODE_ENV : Joi.string().valid("development","production","test").required().default("development"),
  PORT : Joi.number().default(3001),
  Database_host: Joi.string().default("'mongodb://localhost:27017/nest'")
})