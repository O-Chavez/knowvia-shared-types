export interface WsMessage {
    type: 'system' | 'chat' | 'error';
    data: ChatMessage | SystemInfo | ErrorMessage;
}
export interface SystemInfo {
    type: string;
    data: {
        id?: string;
        organizationName?: string;
        apiKey?: string;
        selectedThemeName?: string;
        styleOverrides?: {
            iconColor?: string;
            receivedBubbleColor?: string;
        };
        initialMessage?: string;
    };
}
export interface ErrorMessage {
    errorType: string;
    message?: string;
}
export interface ChatMessage {
    role: 'assistant' | 'user';
    message: string;
}
export interface ChatConversation {
    date: Date;
    messages: ChatMessage[];
    topic?: string;
}
