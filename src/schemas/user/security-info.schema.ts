import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type SecurityInfoDocument = SecurityInfo & Document

@Schema({ _id: false })
export class SecurityInfo {
	@Prop({ unique: true, index: 'text' })
	token: string

	@Prop({ index: 'text' })
	password: string

	@Prop({ required: true, unique: true, index: 'text' })
	email: string
}

export const SecurityInfoSchema = SchemaFactory.createForClass(SecurityInfo)
