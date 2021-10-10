import { Socket } from 'socket.io'
class OnlineUsers {
	private usersOnline: Record<string, Socket> = {}

	public length = 0

	public addUser = (email: string, socket: Socket) => {
		this.usersOnline[email] = socket
		socket.data = email
		this.length += 1
	}

	public removeUser = (email: string) => {
		this.length -= 1
		delete this.usersOnline[email]
	}
}

export default new OnlineUsers()
