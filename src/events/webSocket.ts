export interface WsMessage {
  type: 'system' | 'chat' | 'error';
  data: ChatMessage | SystemInfo | ErrorMessage;
}

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
