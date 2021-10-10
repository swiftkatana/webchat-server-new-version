import { SerachUserDto } from 'dtos/user';
import { IGetUserAuthInfoRequest } from 'type/MyRequest';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUser(req: IGetUserAuthInfoRequest): Promise<{
        data: import("../../interface/user/user.interface").IUser;
        status: string;
    }>;
    getSearchUsers(query: SerachUserDto, req: IGetUserAuthInfoRequest): Promise<{
        data: import("../../schemas/user/user.schema").UserDocument[];
        status: string;
    }>;
}
