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
exports.UserSchema = exports.UserDB = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const personal_info_schema_1 = require("./personal-info.schema");
const security_info_schema_1 = require("./security-info.schema");
const status_info_schema_1 = require("./status-info.schema");
let UserDB = class UserDB {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", personal_info_schema_1.PersonalInfo)
], UserDB.prototype, "personalInfo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", security_info_schema_1.SecurityInfo)
], UserDB.prototype, "securityInfo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => ({}) }),
    __metadata("design:type", status_info_schema_1.StatusInfo)
], UserDB.prototype, "statusInfo", void 0);
UserDB = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], UserDB);
exports.UserDB = UserDB;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(UserDB);
//# sourceMappingURL=user.schema.js.map