import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ChatDocument, ChatDB } from 'schemas/chats/chat'

@Injectable()
export class ChatService {
	constructor(
		@InjectModel(ChatDB.name)
		private ChatModule: Model<ChatDocument>
	) {}
}
