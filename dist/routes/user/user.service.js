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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../schemas/user/user.schema");
const user_more_interface_1 = require("../../interface/user/user-more.interface");
const bcrypt_1 = require("bcrypt");
const user_interface_1 = require("../../interface/user/user.interface");
let UserService = class UserService {
    constructor(UserModule) {
        this.UserModule = UserModule;
        this.filterUserObject = (show) => show ? { 'securityInfo.password': 0, 'securityInfo.token': 0 } : {};
    }
    async serachUserQuery(query, userId) {
        const filterSeachQuery = [
            { 'securityInfo.email': { $regex: `${query}`, $options: 'ig' } },
            { 'personalInfo.firstName': { $regex: `${query}`, $options: 'gi' } },
            { 'personalInfo.lastName': { $regex: `${query}`, $options: 'gi' } },
        ];
        return await this.UserModule.find({
            $or: filterSeachQuery,
            _id: { $ne: userId },
        });
    }
    async createUser(userDetails) {
        const { firstName, lastName, password, email } = userDetails;
        const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
        const newUser = await new this.UserModule({
            securityInfo: {
                email,
                password: hashedPassword,
                token: Date.now().toLocaleString(),
            },
            personalInfo: {
                firstName,
                lastName,
            },
        });
        await newUser.save();
        return newUser;
    }
    async findOneById(_id, getFilterUser) {
        const user = await this.UserModule.findById(_id, this.filterUserObject(getFilterUser));
        if (!user)
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'user not found',
                field: 'user',
            }, common_1.HttpStatus.BAD_REQUEST);
        return user;
    }
    async findOneByEmail(email, getFilterUser) {
        console.log(email);
        const user = await this.UserModule.findOne({ 'securityInfo.email': email }, this.filterUserObject(getFilterUser));
        return user;
    }
    async findOneByToken(token, getFilterUser) {
        const user = await this.UserModule.findOne({ 'securityInfo.token': token }, this.filterUserObject(getFilterUser));
        if (!user)
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'user not found',
                field: 'user',
            }, common_1.HttpStatus.BAD_REQUEST);
        return user;
    }
    async findByIdAndRemove(id) {
        const user = await this.UserModule.findByIdAndDelete(id);
        if (!user)
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'user not found',
                field: 'user',
            }, common_1.HttpStatus.BAD_REQUEST);
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.UserDB.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map