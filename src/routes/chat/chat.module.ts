import { Module } from '@nestjs/common'
import { ChatService } from './chat.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ChatDB } from '../../schemas/chats/chat'
import { RelationshipSchema } from '../../schemas/relationship/relationship'

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: ChatDB.name, schema: RelationshipSchema },
		]),
	],
	providers: [ChatService],
})
export class ChatModule {}
