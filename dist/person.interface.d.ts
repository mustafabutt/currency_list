import { Document } from 'mongoose';
export interface Person extends Document {
    readonly name: string;
    readonly age: number;
    readonly profession: string;
}
