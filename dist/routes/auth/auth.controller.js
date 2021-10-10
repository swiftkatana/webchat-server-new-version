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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const local_auth_guard_1 = require("../../guards/local-auth.guard");
const public_decorator_1 = require("../../decorators/public.decorator");
const MyRequest_1 = require("../../type/MyRequest");
const user_service_1 = require("../user/user.service");
const auth_service_1 = require("./auth.service");
const cookies_1 = require("../../enums/cookies");
const sign_in_user_dto_1 = require("../../dtos/user/sign-in-user.dto");
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async getNewToken(request, response) {
        const token = request.cookies[cookies_1.COOKIES_KEYS.BestLifeAtDiscof].refreshToken;
        const user = await this.userService.findOneByToken(token, true);
        console.log(user);
        const tokens = await this.authService.createToken(user);
        user.securityInfo.token = tokens.refreshToken;
        await user.save();
        response.cookie(cookies_1.COOKIES_KEYS.BestLifeAtDiscof, tokens, { httpOnly: true });
        return { status: 'success' };
    }
    async createUser(signUpUserDto, response) {
        console.log('user');
        const newUser = await this.userService.createUser(signUpUserDto);
        const tokens = await this.authService.createToken(newUser);
        newUser.securityInfo.token = tokens.refreshToken;
        await newUser.save();
        response.cookie(cookies_1.COOKIES_KEYS.BestLifeAtDiscof, tokens, { httpOnly: true });
        return { data: newUser, status: 'success' };
    }
    async signIn(request, response) {
        const user = request.user;
        const tokens = await this.authService.createToken(user);
        user.securityInfo.token = tokens.refreshToken;
        await user.save();
        response.cookie(cookies_1.COOKIES_KEYS.BestLifeAtDiscof, tokens, { httpOnly: true });
        return { status: 'success', data: user };
    }
    async logout(request, response) {
        const user = request.user;
        user.securityInfo.token = undefined;
        await user.save();
        response.clearCookie(cookies_1.COOKIES_KEYS.BestLifeAtDiscof, { httpOnly: true });
        return { status: 'success' };
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getNewToken", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_user_dto_1.SignUpUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createUser", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    (0, common_1.Controller)('api/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map