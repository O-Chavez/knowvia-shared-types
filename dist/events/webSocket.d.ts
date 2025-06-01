/**
 * Main types of messages that can be sent and received over the WebSocket.
 */
export declare enum WsMessageType {
    System = "system",
    Chat = "chat",
    Error = "error"
}
/**
 * Represents a chat message that can be sent or received over the WebSocket.
 */
export interface ChatMessage {
    role: 'assistant' | 'user';
    message: string;
}
/**
 * Represents system-level data shared when a WebSocket connection is established.
 */
export interface SystemInfo {
    id?: string;
    organizationName?: string;
    apiKey?: string;
    selectedThemeName?: string;
    styleOverrides?: {
        iconColor?: string;
        receivedBubbleColor?: string;
    };
    initialMessage?: string;
    devMode?: boolean;
}
/**
 * Represents an error message that can be sent or received over the WebSocket.
 */
export interface ErrorMessage {
    errorType: string;
    message?: string;
}
/**
 * Represents a message passed through the WebSocket with an associated type.
 */
export interface WsMessage {
    type: WsMessageType;
    data: ChatMessage | SystemInfo | ErrorMessage;
}
/**
 * Represents a conversation that occurred over the chat system.
 */
export interface ChatConversation {
    date: Date;
    messages: ChatMessage[];
    topic?: string;
}
export type LeadStatus = 'new' | 'contacted' | 'converted' | 'archived';
export interface Lead {
    accountId: string;
    email?: string;
    phone?: string;
    sourceMessage: string;
    chatConversation: {
        date: string;
        messages: {
            role: 'user' | 'assistant';
            message: string;
        }[];
        topic?: string;
    };
    capturedAt: string;
    status: LeadStatus;
}
export declare function isChatMessage(data: any): data is ChatMessage;
export declare function isErrorMessage(data: any): data is ErrorMessage;
export declare function isSystemInfo(data: any): data is SystemInfo;
