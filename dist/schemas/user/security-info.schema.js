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
exports.SecurityInfoSchema = exports.SecurityInfo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let SecurityInfo = class SecurityInfo {
};
__decorate([
    (0, mongoose_1.Prop)({ unique: true, index: 'text' }),
    __metadata("design:type", String)
], SecurityInfo.prototype, "token", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: 'text' }),
    __metadata("design:type", String)
], SecurityInfo.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, index: 'text' }),
    __metadata("design:type", String)
], SecurityInfo.prototype, "email", void 0);
SecurityInfo = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], SecurityInfo);
exports.SecurityInfo = SecurityInfo;
exports.SecurityInfoSchema = mongoose_1.SchemaFactory.createForClass(SecurityInfo);
//# sourceMappingURL=security-info.schema.js.map