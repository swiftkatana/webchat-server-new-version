import { Module } from '@nestjs/common'
import { UserDB, UserSchema } from 'schemas/user/user.schema'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
	imports: [
		MongooseModule.forFeature([{ name: UserDB.name, schema: UserSchema }]),
	],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
