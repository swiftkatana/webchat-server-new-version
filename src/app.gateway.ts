import {
	SubscribeMessage,
	WebSocketGateway,
	OnGatewayInit,
	WebSocketServer,
	OnGatewayConnection,
	OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Logger } from '@nestjs/common'
import { Socket, Server } from 'socket.io'
import { message } from 'interface/socketRes/index'
import { Io_message_type } from 'enums/socketIo'
import OnlineUsers from 'class/OnlineUsers'

@WebSocketGateway({ cors: true })
export class AppGateway
	implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
	@WebSocketServer()
	server: Server
	private logger: Logger = new Logger('AppGateway')
	@SubscribeMessage('message')
	handleMessage(client: Socket, payload: message): void {
		switch (payload.type) {
			case Io_message_type.LOGIN:
				if (payload.data) OnlineUsers.addUser(payload.data, client)
				else console.log('WTF', payload)
				break
			case Io_message_type.LOGOUT:
				client.data._id && OnlineUsers.removeUser(client.data._id)
				break

			default:
				console.log('default', payload)
				break
		}
	}

	afterInit() {
		setInterval(() => {
			this.logger.log(
				`${new Date().toISOString()}Amount of Users Online: ` + OnlineUsers.length
			)
		}, 60000)

		this.logger.warn('Init')
	}

	handleDisconnect(client: Socket) {
		client.data._id && OnlineUsers.removeUser(client.data._id)
	}

	handleConnection(client: Socket) {}
}
