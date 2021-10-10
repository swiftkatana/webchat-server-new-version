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
exports.RelationshipSchema = exports.RelationshipDB = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const chat_1 = require("../chats/chat");
const user_schema_1 = require("../user/user.schema");
const relationship_types_1 = require("../../enums/relationship/relationship_types");
const relationship_status_1 = require("../../enums/relationship/relationship_status");
let RelationshipDB = class RelationshipDB {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: user_schema_1.UserDB.name, required: true }),
    __metadata("design:type", Array)
], RelationshipDB.prototype, "users", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: chat_1.ChatDB.name }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], RelationshipDB.prototype, "chatId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: relationship_types_1.relationship_types.FRIEND }),
    __metadata("design:type", String)
], RelationshipDB.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: relationship_status_1.relationship_status.PENDING }),
    __metadata("design:type", String)
], RelationshipDB.prototype, "status", void 0);
RelationshipDB = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], RelationshipDB);
exports.RelationshipDB = RelationshipDB;
exports.RelationshipSchema = mongoose_1.SchemaFactory.createForClass(RelationshipDB);
//# sourceMappingURL=relationship.js.map