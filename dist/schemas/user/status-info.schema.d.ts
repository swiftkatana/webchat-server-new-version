import { Document } from 'mongoose';
import userRoles from 'enums/userRoles';
export declare class IAddressSchema {
    country: string;
    city: string;
    state: string;
    street: string;
}
export declare type StatusInfoDocument = StatusInfo & Document;
export declare class StatusInfo {
    role: userRoles;
    address: IAddressSchema;
    description: string;
}
export declare const StatusInfoSchema: import("mongoose").Schema<Document<StatusInfo, any, any>, import("mongoose").Model<Document<StatusInfo, any, any>, any, any>, undefined, {}>;
