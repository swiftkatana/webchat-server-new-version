import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { PersonalInfo } from './personal-info.schema'
import { SecurityInfo } from './security-info.schema'
import { StatusInfo } from './status-info.schema'

export type UserDocument = UserDB & Document

@Schema({ timestamps: true })
export class UserDB {
	@Prop()
	personalInfo: PersonalInfo

	@Prop()
	securityInfo: SecurityInfo

	@Prop({ default: () => ({}) })
	statusInfo: StatusInfo
}

export const UserSchema = SchemaFactory.createForClass(UserDB)
