import { Request } from 'express';
import { IUser } from 'interface/user/user.interface';
export interface IGetUserAuthInfoRequest extends Request {
    user: IUser;
}
