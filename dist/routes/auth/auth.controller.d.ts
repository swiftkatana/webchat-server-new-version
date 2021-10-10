import { Response } from 'express';
import { IGetUserAuthInfoRequest } from 'type/MyRequest';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { SignUpUserDto } from '../../dtos/user/sign-in-user.dto';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    getNewToken(request: IGetUserAuthInfoRequest, response: Response): Promise<{
        status: string;
    }>;
    createUser(signUpUserDto: SignUpUserDto, response: Response): Promise<{
        data: import("../../interface/user/user.interface").IUser;
        status: string;
    }>;
    signIn(request: IGetUserAuthInfoRequest, response: Response): Promise<{
        status: string;
        data: import("../../interface/user/user.interface").IUser;
    }>;
    logout(request: IGetUserAuthInfoRequest, response: Response): Promise<{
        status: string;
    }>;
}
