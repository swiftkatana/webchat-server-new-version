import { Document, Types } from 'mongoose';
export declare type ChatDocument = ChatDB & Document;
export declare class ChatDB {
    users: Types.ObjectId[];
}
export declare const ChatSchema: import("mongoose").Schema<Document<ChatDB, any, any>, import("mongoose").Model<Document<ChatDB, any, any>, any, any>, undefined, {}>;
