import { relationship_req_types } from 'enums/relationship/relationship_types'
import {
	relationship_status,
	relationship_Request_types,
} from '../../enums/relationship/relationship_status'

export class RelationshipGetUserDTO {
	//TODO: add validation
	type: relationship_req_types
}

export class RelationshipCreateDTO {
	status: relationship_status
	type: relationship_Request_types
	userId: string
}
