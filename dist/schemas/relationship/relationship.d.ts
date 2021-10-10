import { Types } from 'mongoose';
import { relationship_types } from 'enums/relationship/relationship_types';
import { relationship_status } from 'enums/relationship/relationship_status';
export declare type RelationshipDocument = RelationshipDB & Document;
export declare class RelationshipDB {
    users: Types.ObjectId[];
    chatId: Types.ObjectId;
    type: relationship_types;
    status: relationship_status;
}
export declare const RelationshipSchema: import("mongoose").Schema<import("mongoose").Document<RelationshipDB, any, any>, import("mongoose").Model<import("mongoose").Document<RelationshipDB, any, any>, any, any>, undefined, {}>;
