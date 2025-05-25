/**
 * Main types of messages that can be sent and received over the WebSocket.
 */
export enum WsMessageType {
  System = 'system',
  Chat = 'chat',
  Error = 'error',
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
