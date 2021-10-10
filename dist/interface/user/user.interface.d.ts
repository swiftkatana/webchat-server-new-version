import userRoles from '../../enums/userRoles';
import { UserDocument } from 'schemas/user/user.schema';
export interface IUser extends UserDocument {
    _id: string;
    createAt: string;
    updateAt: string;
    personalInfo: IUserPersonalInfo;
    securityInfo: IUserSecurityInfo;
    statusInfo: IUserStatusInfo;
}
export interface IAddress {
    country: string;
    city: string;
    state: string;
    street: string;
}
export interface IUserStatusInfo {
    role: userRoles;
    address: IAddress;
    description: string;
    chats: Record<string, unknown>;
    friends: Record<string, unknown>;
    getFriendRequests: Record<string, unknown>;
    sendFriendRequests: Record<string, unknown>;
    blocking: Record<string, unknown>;
    gotBlock: Record<string, unknown>;
}
export interface IUserSecurityInfo {
    token: string;
    password: string;
    email: string;
}
export interface IUserPersonalInfo {
    firstName: string;
    lastName: string;
    phone: string;
}
