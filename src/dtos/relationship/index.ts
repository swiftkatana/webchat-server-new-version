import { IsArray, IsString } from 'class-validator'
import {
	relationship_req_types,
	relationship_types,
} from 'enums/relationship/relationship_types'
import {
	relationship_status,
	relationship_Request_types,
} from 'enums/relationship/relationship_status'
import { Types } from 'mongoose'

export class RelationshipGetUserDTO {
	//TODO: add validation
	type: relationship_req_types
}

export class RelationshipCreateDTO {
	type: relationship_types
	@IsArray()
	usersIds: Types.ObjectId[]
}
export class RelationshipUpdateDTO {
	status: relationship_status

	@IsString()
	geterId: Types.ObjectId
}
