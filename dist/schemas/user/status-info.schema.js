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
exports.StatusInfoSchema = exports.StatusInfo = exports.IAddressSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const userRoles_1 = require("../../enums/userRoles");
let IAddressSchema = class IAddressSchema {
};
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], IAddressSchema.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], IAddressSchema.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], IAddressSchema.prototype, "state", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], IAddressSchema.prototype, "street", void 0);
IAddressSchema = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], IAddressSchema);
exports.IAddressSchema = IAddressSchema;
let StatusInfo = class StatusInfo {
};
__decorate([
    (0, mongoose_1.Prop)({ default: userRoles_1.default.CLINET }),
    __metadata("design:type", String)
], StatusInfo.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ schema: IAddressSchema }),
    __metadata("design:type", IAddressSchema)
], StatusInfo.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], StatusInfo.prototype, "description", void 0);
StatusInfo = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], StatusInfo);
exports.StatusInfo = StatusInfo;
exports.StatusInfoSchema = mongoose_1.SchemaFactory.createForClass(StatusInfo);
//# sourceMappingURL=status-info.schema.js.map