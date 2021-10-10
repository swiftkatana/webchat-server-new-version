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
exports.RelationsipService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const relationship_status_1 = require("../../enums/relationship/relationship_status");
const relationship_1 = require("../../schemas/relationship/relationship");
let RelationsipService = class RelationsipService {
    constructor(RelationsipModule) {
        this.RelationsipModule = RelationsipModule;
    }
    async getRelationships(userId) {
        const relationships = await this.RelationsipModule.find({
            users: { $in: [userId] },
        });
        return relationships;
    }
    async createRelationship({ status, users, }) {
        return await new this.RelationsipModule({ users, status });
    }
};
RelationsipService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(relationship_1.RelationshipDB.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RelationsipService);
exports.RelationsipService = RelationsipService;
//# sourceMappingURL=relationsip.service.js.map