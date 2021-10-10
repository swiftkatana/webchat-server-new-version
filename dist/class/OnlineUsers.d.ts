import { Socket } from 'socket.io';
declare class OnlineUsers {
    private usersOnline;
    length: number;
    addUser: (email: string, socket: Socket) => void;
    removeUser: (email: string) => void;
}
declare const _default: OnlineUsers;
export default _default;
