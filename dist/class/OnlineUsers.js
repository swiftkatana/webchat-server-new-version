"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OnlineUsers {
    constructor() {
        this.usersOnline = {};
        this.length = 0;
        this.addUser = (email, socket) => {
            this.usersOnline[email] = socket;
            socket.data = email;
            this.length += 1;
        };
        this.removeUser = (email) => {
            this.length -= 1;
            delete this.usersOnline[email];
        };
    }
}
exports.default = new OnlineUsers();
//# sourceMappingURL=OnlineUsers.js.map