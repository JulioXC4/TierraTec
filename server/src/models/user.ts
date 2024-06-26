import { Document, Number, Schema } from 'mongoose';

export interface User {
    _id?: any;
    name: string;
    lastName: string;
    email: string;
    cellPhone: Number;
    password: string;
}

    //@ts-ignore
export interface UserModel extends User, Document {}