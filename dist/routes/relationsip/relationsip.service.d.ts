import { Model, Types } from 'mongoose';
import { relationship_status } from 'enums/relationship/relationship_status';
import { RelationshipDB, RelationshipDocument } from 'schemas/relationship/relationship';
export declare class RelationsipService {
    private RelationsipModule;
    constructor(RelationsipModule: Model<RelationshipDocument>);
    getRelationships(userId: Types.ObjectId): Promise<RelationshipDocument[]>;
    createRelationship({ status, users, }: {
        status: relationship_status;
        users: string[];
    }): Promise<RelationshipDB & Document & import("mongoose").Document<any, any, RelationshipDocument>>;
}
