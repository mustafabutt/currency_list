import {Module, NestModule, MiddlewareConsumer, HttpModule} from '@nestjs/common';
import {LoggerMiddleware} from "./middlewares/logger.middleware"

import { DatabaseModule } from './database/database.module';
import { AppController } from './controllers/app.controller';
import { CurrencyController } from './controllers/currency.controller'
import {productProviders} from './providers/product.provider'
import { AppService } from './services/app.service';
import { currenciesProviders } from "./providers/currency.provider";
import { CurrencyService } from "./services/currency.service";
import {ConfigModule} from '@nestjs/config'
import {configuration} from "./config/configurations";
import {validationSchema} from "./config/validations";

@Module({
  imports: [DatabaseModule,
    HttpModule,
    ConfigModule.forRoot({
      envFilePath : '../.env.local',
      isGlobal:true,
      load : [configuration],
      validationSchema
    })
  ],
  controllers: [AppController,CurrencyController],
  providers: [AppService,CurrencyService,
    ...productProviders,
    ...currenciesProviders
  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(LoggerMiddleware)
        .forRoutes('products');
  }
}
