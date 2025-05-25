import { UsagePeriod } from '../models/account';
import { ChatConversation } from './webSocket';
export declare const __noop = true;
export interface ChatAnalytics {
    usage: UsagePeriod;
    totalMessages: number;
    averageMessages: number;
    popularTopics: [string, number][];
    converstationsByDay: Record<string, ChatConversation[]>;
}
export interface ChatAnalyticsResponseType {
    success: boolean;
    data: {
        usage: UsagePeriod;
        totalMessages: number;
        averageMessages: number;
        popularTopics: {
            topic: string;
            count: number;
        }[];
        converstationsByDay: Record<string, ChatConversation[]>;
    };
}
