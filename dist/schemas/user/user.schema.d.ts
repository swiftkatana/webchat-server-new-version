import { Document } from 'mongoose';
import { PersonalInfo } from './personal-info.schema';
import { SecurityInfo } from './security-info.schema';
import { StatusInfo } from './status-info.schema';
export declare type UserDocument = UserDB & Document;
export declare class UserDB {
    personalInfo: PersonalInfo;
    securityInfo: SecurityInfo;
    statusInfo: StatusInfo;
}
export declare const UserSchema: import("mongoose").Schema<Document<UserDB, any, any>, import("mongoose").Model<Document<UserDB, any, any>, any, any>, undefined, {}>;
