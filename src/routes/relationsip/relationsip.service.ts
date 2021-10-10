import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { relationship_status } from 'enums/relationship/relationship_status'
import {
	RelationshipDB,
	RelationshipDocument,
} from 'schemas/relationship/relationship'

@Injectable()
export class RelationsipService {
	constructor(
		@InjectModel(RelationshipDB.name)
		private RelationsipModule: Model<RelationshipDocument>
	) {}

	public async getRelationships(
		userId: Types.ObjectId
	): Promise<RelationshipDocument[]> {
		const relationships = await this.RelationsipModule.find({
			users: { $in: [userId] },
		})

		return relationships
	}

	public async createRelationship({
		status,
		users,
	}: {
		status: relationship_status
		users: string[]
	}) {
		return await new this.RelationsipModule({ users, status })
	}
}
