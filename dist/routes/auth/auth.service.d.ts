import { JwtService } from '@nestjs/jwt';
import { IUser } from 'interface/user/user.interface';
import { UserService } from '../user/user.service';
import { ISignInParameters } from 'interface/user/user-more.interface';
export declare class AuthService {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UserService);
    validateUser(userData: ISignInParameters): Promise<IUser>;
    getRefreshToken(): string;
    createToken(user: IUser): Promise<{
        refreshToken: string;
        accessToken: string;
    }>;
}
