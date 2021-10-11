import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'
import { ChatDB } from 'schemas/chats/chat'
import { UserDB } from 'schemas/user/user.schema'
import { relationship_types } from 'enums/relationship/relationship_types'
import { relationship_status } from 'enums/relationship/relationship_status'
import { FriendRelationshipDB } from './friendRelationship'
import { GroupRelationshipDB } from './groupRelationship'

export type RelationshipDocument = RelationshipDB & Document

@Schema({ timestamps: true, discriminatorKey: 'kind' })
export class RelationshipDB {
	@Prop({
		type: String,
		required: true,
		enum: [FriendRelationshipDB.name, GroupRelationshipDB.name],
	})
	kind: string

	@Prop({ type: Types.ObjectId, ref: ChatDB.name })
	chatId: Types.ObjectId
}

export const RelationshipSchema = SchemaFactory.createForClass(RelationshipDB)
