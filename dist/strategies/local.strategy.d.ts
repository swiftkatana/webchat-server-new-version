import { AuthService } from 'routes/auth/auth.service';
import { IUser } from 'interface/user/user.interface';
import { Request } from 'express';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(request: Request, email: string, password: string): Promise<IUser>;
}
export {};
