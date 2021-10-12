import { IsArray } from 'class-validator'
import {
	relationship_req_types,
	relationship_types,
} from 'enums/relationship/relationship_types'
import {
	relationship_status,
	relationship_Request_types,
} from '../../enums/relationship/relationship_status'

export class RelationshipGetUserDTO {
	//TODO: add validation
	type: relationship_req_types
}

export class RelationshipCreateDTO {
	type: relationship_types
	@IsArray()
	usersIds: string[]
}
export class RelationshipUpdateDTO {
	status: relationship_status
	data: any
}
