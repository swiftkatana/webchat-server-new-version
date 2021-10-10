import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { message } from 'interface/socketRes/index';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    private logger;
    handleMessage(client: Socket, payload: message): void;
    afterInit(): void;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket): void;
}
