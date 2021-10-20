import { relationship_status } from 'enums/relationship/relationship_status'
import { relationship_types } from 'enums/relationship/relationship_types'
import { Types } from 'mongoose'

export interface IRelationshipAPICreate {
	users: Types.ObjectId[]
}

export interface IRelationshipAPICheckIfExists {
	userids: string[]
}

export interface IRelationshipUpdate {
	senderId: Types.ObjectId
	geterId: Types.ObjectId
	status: relationship_status
}
