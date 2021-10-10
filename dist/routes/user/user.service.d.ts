import { Model } from 'mongoose';
import { UserDocument } from 'schemas/user/user.schema';
import { ICreateUser } from 'interface/user/user-more.interface';
import { IUser } from 'interface/user/user.interface';
export declare class UserService {
    private UserModule;
    constructor(UserModule: Model<UserDocument>);
    filterUserObject: (show: boolean) => {
        'securityInfo.password': number;
        'securityInfo.token': number;
    } | {
        'securityInfo.password'?: undefined;
        'securityInfo.token'?: undefined;
    };
    serachUserQuery(query: string, userId: string): Promise<UserDocument[]>;
    createUser(userDetails: ICreateUser): Promise<IUser>;
    findOneById(_id: string, getFilterUser: boolean): Promise<UserDocument | any>;
    findOneByEmail(email: string, getFilterUser: boolean): Promise<UserDocument & any>;
    findOneByToken(token: string, getFilterUser: boolean): Promise<UserDocument | any>;
    findByIdAndRemove(id: string): Promise<UserDocument | any>;
}
