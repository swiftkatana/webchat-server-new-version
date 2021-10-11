import { relationship_types } from './relationship_types'

export interface IRelationshipAPICreate {
	users: string[]
	type: relationship_types
}

export interface IRelationshipAPICheckIfExists {
	userids: string[]
}
