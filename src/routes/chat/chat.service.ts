import { Injectable } from '@nestjs/common'
import { CreateChatDto } from 'dtos/chat/create-chat.dto'
import { UpdateChatDto } from 'dtos/chat/update-chat.dto'

@Injectable()
export class ChatService {
	create(createChatDto: CreateChatDto) {
		return 'This action adds a new chat'
	}

	findAll() {
		return `This action returns all chat`
	}

	findOne(id: number) {
		return `This action returns a #${id} chat`
	}

	update(id: number, updateChatDto: UpdateChatDto) {
		return `This action updates a #${id} chat`
	}

	remove(id: number) {
		return `This action removes a #${id} chat`
	}
}
