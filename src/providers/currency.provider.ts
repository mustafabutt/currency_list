import { Connection } from 'mongoose';
import { CurrencySchema } from '../schemas/currency.schema';

export const currenciesProviders = [
  {
    provide: 'CURRENCIES_MODEL',
    useFactory: (connection: Connection) => connection.model('Currencies', CurrencySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];