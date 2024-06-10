import { Document } from 'mongoose';

export interface Admin {
    _id?: any;
    email: string;
    password: string;
}

    //@ts-ignore
export interface AdminModel extends Admin, Document {}