import { Document, Types } from 'mongoose';
import { message_types } from 'enums/message_Types';
export declare type MessageDocument = MessageDB & Document;
export declare class MessageDB {
    chatId: Types.ObjectId;
    userId: Types.ObjectId;
    type: message_types;
    body: string;
}
export declare const MessageSchema: import("mongoose").Schema<Document<MessageDB, any, any>, import("mongoose").Model<Document<MessageDB, any, any>, any, any>, undefined, {}>;
