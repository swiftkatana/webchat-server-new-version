import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import userRoles from 'enums/userRoles'

@Schema({ _id: false })
export class IAddressSchema {
	@Prop({ default: '' })
	country: string
	@Prop({ default: '' })
	city: string
	@Prop({ default: '' })
	state: string
	@Prop({ default: '' })
	street: string
}

export type StatusInfoDocument = StatusInfo & Document

@Schema({ _id: false })
export class StatusInfo {
	@Prop({ default: userRoles.CLINET })
	role: userRoles

	@Prop({ schema: IAddressSchema })
	address: IAddressSchema

	@Prop({ default: '' })
	description: string

	@Prop({ default: [] })
	usersIds: string[]
}

export const StatusInfoSchema = SchemaFactory.createForClass(StatusInfo)
