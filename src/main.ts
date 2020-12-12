import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from "@nestjs/common";
import {ConfigService} from "@nestjs/config"
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = app.get(ConfigService)
  await app.listen(process.env.PORT, () => {
    Logger.log("listening at " + process.env.PORT)
    Logger.log("running in at "+config.get("environment") )
  });
}
bootstrap();
