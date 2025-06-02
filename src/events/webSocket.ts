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
  date?: Date;
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
  _id: string;
  date: Date;
  messages: ChatMessage[];
  topic?: string;
}

export enum LeadTemperature {
  Hot = 'hot',
  Warm = 'warm',
  Cold = 'cold',
}

export enum LeadStatus {
  New = 'new',
  Contacted = 'contacted',
  Converted = 'converted',
  Archived = 'archived',
}
export interface Lead {
  _id: string;
  accountId: string;
  email?: string;
  phone?: string;
  name?: string;
  sourceMessage: string;
  chatConversation: ChatConversation;
  capturedAt: string;
  status: LeadStatus;
  leadTemperature?: LeadTemperature;
}

export function isChatMessage(data: any): data is ChatMessage {
  return (
    typeof data?.message === 'string' &&
    (data.role === 'assistant' || data.role === 'user')
  );
}

export function isErrorMessage(data: any): data is ErrorMessage {
  return typeof data?.errorType === 'string';
}

export function isSystemInfo(data: any): data is SystemInfo {
  return (
    typeof data === 'object' &&
    (data.organizationName !== undefined ||
      data.apiKey !== undefined ||
      data.selectedThemeName !== undefined)
  );
}
