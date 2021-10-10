import { UserService } from 'routes/user/user.service';
import { IJwtToken } from 'interface/jwt-token.interface';
import { Request } from 'express';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(request: Request, payload: IJwtToken): Promise<any>;
}
export {};
