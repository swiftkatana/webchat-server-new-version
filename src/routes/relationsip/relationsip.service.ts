import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { relationship_status } from 'enums/relationship/relationship_status'
import { relationship_types } from 'enums/relationship/relationship_types'
import {
	RelationshipDB,
	RelationshipDocument,
} from 'schemas/relationship/relationship'
import { IRelationshipAPICreate } from 'enums/relationship/relationship_reqs'
import { throwError } from 'error/throwError'
import { ERROR_FIEDS, ERROR_LIST } from 'enums/error_list'
import {
	FriendRelationshipDB,
	friendRelationshipDocument,
} from 'schemas/relationship/friendRelationship'
import {
	GroupRelationshipDB,
	groupRelationshipDocument,
} from 'schemas/relationship/groupRelationship'

@Injectable()
export class RelationsipService {
	constructor(
		@InjectModel(RelationshipDB.name)
		private RelationsipModule: Model<RelationshipDocument>,

		@InjectModel(GroupRelationshipDB.name)
		private GroupRelationsipModule: Model<groupRelationshipDocument>,

		@InjectModel(FriendRelationshipDB.name)
		private FriendRelationshipModule: Model<friendRelationshipDocument>
	) {}

	public async getRelationships(
		userId: Types.ObjectId
	): Promise<RelationshipDocument[]> {
		const relationships = await this.RelationsipModule.find({
			users: { $in: [userId] },
		})

		return relationships
	}

	public async checkRelationshipFriendExist(
		usersids: string[]
	): Promise<RelationshipDocument> {
		return await this.FriendRelationshipModule.findOne({
			$or: [
				{ userId1: usersids[0], userId2: usersids[1] },
				{ userId1: usersids[1], userId2: usersids[0] },
			],
		})
	}

	public async createRelationship({ users, type }: IRelationshipAPICreate) {
		if (type === relationship_types.FRIEND) {
			//  check if relationship already existing
			const doWeHave = await this.checkRelationshipFriendExist(users)
			if (doWeHave)
				throwError({
					error: ERROR_LIST.DUPLICATE,
					field: ERROR_FIEDS.RELATIONSHIP_DUPLICATE,
				})
			else
				return await new this.FriendRelationshipModule({
					userId1: users[0],
					userId2: users[1],
				})
		} else {
			return await new this.GroupRelationsipModule({ users })
		}
	}
}
