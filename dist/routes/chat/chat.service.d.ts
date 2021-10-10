import { Model } from 'mongoose';
import { ChatDocument } from 'schemas/chats/chat';
export declare class ChatService {
    private ChatModule;
    constructor(ChatModule: Model<ChatDocument>);
}
