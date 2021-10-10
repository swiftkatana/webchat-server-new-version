import { Document } from 'mongoose';
export declare type SecurityInfoDocument = SecurityInfo & Document;
export declare class SecurityInfo {
    token: string;
    password: string;
    email: string;
}
export declare const SecurityInfoSchema: import("mongoose").Schema<Document<SecurityInfo, any, any>, import("mongoose").Model<Document<SecurityInfo, any, any>, any, any>, undefined, {}>;
