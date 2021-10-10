import { RelationshipCreateDTO, RelationshipGetUserDTO } from 'dtos/relationship';
import { RelationshipDocument } from 'schemas/relationship/relationship';
import { IGetUserAuthInfoRequest } from 'type/MyRequest';
import { RelationsipService } from './relationsip.service';
export declare class RelationsipController {
    private relationshipService;
    constructor(relationshipService: RelationsipService);
    getRelationsip(req: IGetUserAuthInfoRequest, query: RelationshipGetUserDTO): Promise<"dsa" | {
        status: string;
        data: RelationshipDocument[];
    }>;
    createRelationship(req: IGetUserAuthInfoRequest, body: RelationshipCreateDTO): Promise<RelationshipDocument>;
}
