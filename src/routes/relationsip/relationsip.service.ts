import { Injectable, Type } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { relationship_status } from 'enums/relationship/relationship_status'
import { relationship_types } from 'enums/relationship/relationship_types'
import {
	RelationshipDB,
	RelationshipDocument,
} from 'schemas/relationship/relationship'
import {
	IRelationshipAPICreate,
	IRelationshipUpdate,
} from 'interface/relationship/relationship'
import { throwError } from 'error/throwError'
import { ERROR_FIlEDS, ERROR_LIST } from 'enums/error_list'
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
	): Promise<friendRelationshipDocument[]> {
		const relationships = await this.FriendRelationshipModule.find({
			$or: [{ userId1: userId }, { userId2: userId }],
		})

		return relationships
	}

	public async getRelationship(
		usersids: Types.ObjectId[]
	): Promise<friendRelationshipDocument> {
		return await this.FriendRelationshipModule.findOne({
			$or: [
				{ userId1: usersids[0], userId2: usersids[1] },
				{ userId1: usersids[1], userId2: usersids[0] },
			],
		})
	}

	public async updateRelationship({
		geterId,
		senderId,
		status,
	}: IRelationshipUpdate): Promise<friendRelationshipDocument> {
		const relationships = await this.getRelationship([senderId, geterId])
		if (!relationships)
			throwError({
				error: ERROR_LIST.NOT_EXISTS,
				field: ERROR_FIlEDS.RELATIONSHIP_NOT_EXISTS,
			})

		// after geting the relationship we need to know what kind of update status it is
		switch (status) {
			// ------ acepet  relationship ------	senderId in this case is the user that acepet the request to relationship
			case relationship_status.ACEPET:
				//  we make sure that the user that acepet the request  is the user that need accept it
				if (relationships.userId2 !== senderId)
					throwError({
						error: ERROR_LIST.BAD_REQUEST,
						field: ERROR_FIlEDS.BAD_REQUEST,
					})
				else {
					relationships.status = relationship_status.ACEPET
				}

				break

			default:
				break
		}
		await relationships.save()
		return relationships
	}

	// can only create a relationship if
	// #1 there is no existing relationship
	// #2  there is already a relationship but its status is delete
	public async createFriendRelationship({
		users,
	}: IRelationshipAPICreate): Promise<friendRelationshipDocument> {
		//  check if there is already a relationship
		const oldRelationships = (await this.getRelationship(
			users
		)) as friendRelationshipDocument
		if (
			oldRelationships &&
			oldRelationships?.status === relationship_status.DELETE
		) {
			oldRelationships.userId1 = users[0]
			oldRelationships.userId2 = users[1]
			return await oldRelationships.save()
		} else if (!oldRelationships) {
			return await new this.FriendRelationshipModule({
				userId1: users[0],
				userId2: users[1],
			}).save()
		} else {
			throwError({
				error: ERROR_LIST.DUPLICATE,
				field: ERROR_FIlEDS.RELATIONSHIP_DUPLICATE,
			})
		}
	}

	// end
}
