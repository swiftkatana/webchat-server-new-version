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
exports.RelationsipController = void 0;
const common_1 = require("@nestjs/common");
const relationship_1 = require("../../dtos/relationship");
const relationship_status_1 = require("../../enums/relationship/relationship_status");
const relationship_types_1 = require("../../enums/relationship/relationship_types");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const relationship_2 = require("../../schemas/relationship/relationship");
const MyRequest_1 = require("../../type/MyRequest");
const relationsip_service_1 = require("./relationsip.service");
let RelationsipController = class RelationsipController {
    constructor(relationshipService) {
        this.relationshipService = relationshipService;
    }
    async getRelationsip(req, query) {
        if (query.type === relationship_types_1.relationship_req_types.ALL) {
            const relationships = await this.relationshipService.getRelationships(req.user.id);
            return { status: 'success', data: relationships };
        }
        else {
            console.log('one', query.type);
            return 'dsa';
        }
    }
    async createRelationship(req, body) {
        const { status, type, userId } = body;
        const sendUser = req.user;
        let relationship;
        switch (type) {
            case relationship_status_1.relationship_Request_types.CREATE:
                relationship = await this.relationshipService.createRelationship({
                    status,
                    users: [sendUser._id, userId],
                });
                break;
            case relationship_status_1.relationship_Request_types.UPDATE:
                break;
            default:
                break;
        }
        return relationship;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, relationship_1.RelationshipGetUserDTO]),
    __metadata("design:returntype", Promise)
], RelationsipController.prototype, "getRelationsip", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, relationship_1.RelationshipCreateDTO]),
    __metadata("design:returntype", Promise)
], RelationsipController.prototype, "createRelationship", null);
RelationsipController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('api/relationship'),
    __metadata("design:paramtypes", [relationsip_service_1.RelationsipService])
], RelationsipController);
exports.RelationsipController = RelationsipController;
//# sourceMappingURL=relationsip.controller.js.map