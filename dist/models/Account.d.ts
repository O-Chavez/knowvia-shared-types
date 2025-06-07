import { ChatConversation } from '../events/webSocket';
import { ChatCustomization } from '../styles/chatCustomization';
import { KnowledgeBase } from './knowledgeBase';
export interface AccountModel {
    _id?: string;
    googleId?: string;
    email: string;
    password: string;
    knowledgeBase?: KnowledgeBase;
    created: Date;
    accountHolderFirstName?: string;
    accountHolderLastName?: string;
    organizationName?: string;
    organizationLocation?: string;
    organizationSector?: string;
    organizationDescription?: string;
    lastLogin?: Date;
    summary?: string;
    usage?: UsagePeriod[];
    accountStatus: accountStatusEnum;
    package?: packageTypeEnum;
    conversations: ChatConversation[];
    stripeCustomerId?: string;
    itemId?: string;
    paymentHistory?: TransactionRecord[];
    subscriptionStatus?: subscriptionStatusEnum;
    subscriptionEnds?: Date;
    subscriptionStarts?: Date;
    eventHistory?: AccountEvent[];
    chatCustomization?: ChatCustomization;
    allowedDomains?: string[];
    devMode?: boolean;
}
export interface UsagePeriod {
    startDate: Date;
    endDate: Date;
    apiCalls: number;
    conversations: number;
}
export declare enum subscriptionStatusEnum {
    active = "active",
    trialing = "trialing",
    past_due = "past_due",
    unpaid = "unpaid",
    canceled = "canceled",
    incomplete = "incomplete",
    incomplete_expired = "incomplete_expired"
}
export declare enum packageTypeEnum {
    standard = "standard",
    premium = "premium",
    enterprise = "enterprise"
}
export declare enum accountStatusEnum {
    created = "created",
    payment_provided = "payment_provided",
    documents_provided = "documents_provided",
    active = "active",
    inactive = "inactive",
    deleted = "deleted",
    email_verified = "email_verified",
    payment_failed = "payment_failed"
}
export interface TransactionRecord {
    date: Date;
    amount: number;
    invoiceId: string;
    description?: string;
    status: 'succeeded' | 'failed';
    subscriptionId?: string;
}
export interface AccountEvent {
    type: 'account_updated' | 'password_reset' | 'email_changed' | string;
    date: Date;
    description?: string;
    source?: 'user' | 'admin' | 'system';
    changes?: {
        field: string;
        oldValue: any;
        newValue: any;
    }[];
    previousState?: Record<string, any>;
}
