import userRoles from 'enums/userRoles';
export declare const ROLES_KEY = "ROLES";
export declare const Roles: (...roles: userRoles[]) => import("@nestjs/common").CustomDecorator<string>;
