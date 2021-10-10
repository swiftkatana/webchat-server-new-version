import { Document } from 'mongoose';
export declare type PersonalInfoDocument = PersonalInfo & Document;
export declare class PersonalInfo {
    firstName: string;
    lastName: string;
    phone: string;
}
export declare const PersonalInfoSchema: import("mongoose").Schema<Document<PersonalInfo, any, any>, import("mongoose").Model<Document<PersonalInfo, any, any>, any, any>, undefined, {}>;
