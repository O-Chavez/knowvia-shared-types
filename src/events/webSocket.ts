/**
 * Main types of messages that can be sent and recieved over the WebSocket.
 * @param System System messages / Init messages
 * @param Chat Chat messages
 * @param Error Error messages
 */
export enum WsMessageType {
  System = 'system', // System messages / Init messages
  Chat = 'chat', // Chat messages
  Error = 'error', // Error messages
}

/**
 * Represents a message that can be sent or recieved over the WebSocket.
 * @param type The type of message (system, chat, error)
 * @param data The message content.
 */
export interface WsMessage {
  type: WsMessageType;
  data: ChatMessage | SystemInfo | ErrorMessage;
}

/**
 * Represents the system data that is sent when a WebSocket connection is established.
 * @param id The unique identifier of the system.
 * @param organizationName The name of the organization.
 */
export interface SystemInfo {
  type: string;
  data: {
    // data sent to the client
    id?: string;
    organizationName?: string;
    // data received from the client
    apiKey?: string;
    // chat customization information
    selectedThemeName?: string;
    styleOverrides?: {
      iconColor?: string;
      receivedBubbleColor?: string;
    };
    initialMessage?: string;
  };
}

/**
 * Represents an error message that can be sent or recieved over the WebSocket.
 * @param type The type of message (error)
 * @param data The message content.
 */
export interface ErrorMessage {
  errorType: string;
  message?: string;
}

/**
 * Represents a chat message that can be sent or recieved over the WebSocket.
 * @param message The message content.
 * @param type The type of message (recieve or send)
 */
export interface ChatMessage {
  role: 'assistant' | 'user';
  message: string;
}

/**
 * Represents a system message that can be sent or recieved over the WebSocket.
 * @param type The type of message (system)
 * @param data The message content.
 */
export interface SystemMessage {
  type: string;
  data: SystemInfo;
}

export interface ChatConversation {
  date: Date;
  messages: ChatMessage[];
  topic?: string;
}
