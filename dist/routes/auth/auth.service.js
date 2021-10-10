"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const crypto = require("crypto");
const jwt_1 = require("@nestjs/jwt");
const user_interface_1 = require("../../interface/user/user.interface");
const user_service_1 = require("../user/user.service");
const bcrypt_1 = require("bcrypt");
const user_more_interface_1 = require("../../interface/user/user-more.interface");
let AuthService = class AuthService {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async validateUser(userData) {
        const { email, password } = userData;
        const user = await this.userService.findOneByEmail(email, false);
        console.log(user);
        if (!user)
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'User  was not found',
                field: 'email',
            }, common_1.HttpStatus.BAD_REQUEST);
        console.log(password, user.securityInfo.password);
        const match = await (0, bcrypt_1.compare)(password, user.securityInfo.password);
        console.log(match);
        if (match)
            return user;
        else {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'Wrong password, please try again',
                field: 'password',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    getRefreshToken() {
        return crypto
            .randomBytes(64)
            .toString('base64')
            .replace(/\//g, '_')
            .replace(/\+/g, '-');
    }
    async createToken(user) {
        const accessToken = await this.jwtService.signAsync({ _id: user._id });
        const refreshToken = this.getRefreshToken();
        return { refreshToken, accessToken };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map