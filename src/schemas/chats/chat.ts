import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { UserDB } from 'schemas/user/user.schema'

export type ChatDocument = ChatDB & Document

@Schema({ timestamps: true })
export class ChatDB {
	@Prop({ type: Types.ObjectId, ref: UserDB.name, required: true })
	users: Types.ObjectId[]
}

export const ChatSchema = SchemaFactory.createForClass(ChatDB)
