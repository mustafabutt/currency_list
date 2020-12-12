import { Document } from 'mongoose';
export interface Car extends Document {
    readonly name: string;
    readonly number: number;
    readonly color: string;
}
