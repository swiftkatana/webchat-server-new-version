import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type PersonalInfoDocument = PersonalInfo & Document

@Schema({ _id: false })
export class PersonalInfo {
	@Prop({ required: true })
	firstName: string

	@Prop({ required: true })
	lastName: string

	@Prop()
	phone: string
}

export const PersonalInfoSchema = SchemaFactory.createForClass(PersonalInfo)
