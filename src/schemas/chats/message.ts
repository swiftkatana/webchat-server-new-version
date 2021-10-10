import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { ChatDB } from './chat'
import { UserDB } from 'schemas/user/user.schema'
import { message_types } from 'enums/message_Types'

export type MessageDocument = MessageDB & Document

@Schema({ timestamps: true })
export class MessageDB {
	@Prop({ type: Types.ObjectId, ref: ChatDB.name, required: true })
	chatId: Types.ObjectId

	@Prop({ type: Types.ObjectId, ref: UserDB.name, required: true })
	userId: Types.ObjectId

	@Prop({ required: true })
	type: message_types

	@Prop({ required: true })
	body: string
}

export const MessageSchema = SchemaFactory.createForClass(MessageDB)
