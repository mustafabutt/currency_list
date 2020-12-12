import { Document } from 'mongoose';
export interface Curency extends Document {
    readonly currencies: [];
}
