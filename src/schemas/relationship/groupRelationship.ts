import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'
import { ChatDB } from 'schemas/chats/chat'
import { UserDB } from 'schemas/user/user.schema'
import { relationship_types } from 'enums/relationship/relationship_types'
import { relationship_status } from 'enums/relationship/relationship_status'

export type groupRelationshipDocument = GroupRelationshipDB & Document

@Schema({ timestamps: true, discriminatorKey: 'type' })
export class GroupRelationshipDB {
	kind: string
	chatId: Types.ObjectId

	@Prop({ type: Types.ObjectId, ref: UserDB.name, required: true })
	users: Types.ObjectId[]
}

export const GroupRelationshipSchema =
	SchemaFactory.createForClass(GroupRelationshipDB)
