import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document, Model, Types } from 'mongoose'
import { ChatDB } from 'schemas/chats/chat'
import { UserDB } from 'schemas/user/user.schema'
import { relationship_types } from 'enums/relationship/relationship_types'
import { relationship_status } from 'enums/relationship/relationship_status'

export type friendRelationshipDocument = FriendRelationshipDB & Document

@Schema({ timestamps: true, discriminatorKey: 'type' })
export class FriendRelationshipDB {
	kind: string
	chatId: Types.ObjectId
	@Prop({ type: Types.ObjectId, ref: UserDB.name, required: true })
	userId1: Types.ObjectId
	@Prop({ type: Types.ObjectId, ref: UserDB.name, required: true })
	userId2: Types.ObjectId

	@Prop()
	unblocker: Types.ObjectId

	@Prop({ default: relationship_status.PENDING })
	status: relationship_status
}

export const FriendRelationshipSchema =
	SchemaFactory.createForClass(FriendRelationshipDB)
