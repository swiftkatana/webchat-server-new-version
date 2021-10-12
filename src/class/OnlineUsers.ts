import { Socket } from 'socket.io'
class OnlineUsers {
	private usersOnline: Record<string, Socket> = {}

	public length = 0

	public addUser = (email: string, socket: Socket) => {
		this.usersOnline[email] = socket
		socket.data = email
		this.length += 1
		console.log('login email', email)
	}

	public removeUser = (email: string) => {
		this.length -= 1
		console.log('logout', email)
		delete this.usersOnline[email]
	}
}

export default new OnlineUsers()
