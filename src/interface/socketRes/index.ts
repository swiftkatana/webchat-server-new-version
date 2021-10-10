import { Io_message_type } from 'enums/socketIo'
import { IUser } from 'interface/user/user.interface'
import { Socket } from 'socket.io'

export interface ILiveUpdateFriend {
	resType: string
	sender: IUser
	header: string
	status: string
	body: string
}

export interface ILiveCall {
	resType: string
	sender: IUser
	header: string
	status: string
	body: string
}

export interface message {
	type: Io_message_type
	data: any
}

export interface IUserSoket {
	email: string
	socket: Socket
}
