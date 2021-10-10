import { relationship_req_types } from 'enums/relationship/relationship_types';
import { relationship_status, relationship_Request_types } from '../../enums/relationship/relationship_status';
export declare class RelationshipGetUserDTO {
    type: relationship_req_types;
}
export declare class RelationshipCreateDTO {
    status: relationship_status;
    type: relationship_Request_types;
    userId: string;
}
