import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'
import { ChatDB } from 'schemas/chats/chat'
import { UserDB } from 'schemas/user/user.schema'
import { relationship_types } from 'enums/relationship/relationship_types'
import { relationship_status } from 'enums/relationship/relationship_status'

export type RelationshipDocument = RelationshipDB & Document

@Schema({ timestamps: true })
export class RelationshipDB {
	@Prop({ type: Types.ObjectId, ref: UserDB.name, required: true })
	users: Types.ObjectId[]

	@Prop({ type: Types.ObjectId, ref: ChatDB.name })
	chatId: Types.ObjectId

	@Prop({ default: relationship_types.FRIEND })
	type: relationship_types

	@Prop({ default: relationship_status.PENDING })
	status: relationship_status
}
export const RelationshipSchema = SchemaFactory.createForClass(RelationshipDB)
