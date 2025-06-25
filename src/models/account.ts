import { ChatConversation } from '../events/webSocket.js';
import { ChatCustomization } from '../styles/chatCustomization.js';
import { KnowledgeBase } from './knowledgeBase.js';

export interface AccountModel {
  // Base account information
  _id?: string;
  googleId?: string;
  email: string;
  password: string;
  knowledgeBase?: KnowledgeBase;
  created: Date;
  accountHolderFirstName?: string;
  accountHolderLastName?: string;
  authProvider: authProviderEnum;

  // Organization information
  organizationName?: string;
  organizationLocation?: string;
  organizationSector?: string;
  organizationDescription?: string;
  lastLogin?: Date;
  summary?: string;

  // Usage information
  usage?: UsagePeriod[];
  accountStatus: accountStatusEnum;
  package?: packageTypeEnum;
  billingCycle: billingCycleEnum;
  conversations: ChatConversation[];

  // Stripe customer information
  stripeCustomerId?: string;
  itemId?: string;
  paymentHistory?: TransactionRecord[];
  subscriptionStatus?: subscriptionStatusEnum;
  subscriptionEnds?: Date;
  subscriptionStarts?: Date;
  eventHistory?: AccountEvent[];

  // Chat customization
  chatCustomization?: ChatCustomization;
  allowedDomains?: string[];
  devMode?: boolean;
}

export enum authProviderEnum {
  google = 'google',
  local = 'local',
}

export interface UsagePeriod {
  startDate: Date;
  endDate: Date;
  apiCalls: number;
  conversations: number;
}
export enum subscriptionStatusEnum {
  active = 'active',
  trialing = 'trialing',
  past_due = 'past_due',
  unpaid = 'unpaid',
  canceled = 'canceled',
  incomplete = 'incomplete',
  incomplete_expired = 'incomplete_expired',
}

export enum packageTypeEnum {
  starter = 'starter',
  growth = 'growth',
  pro = 'pro',
  enterprise = 'enterprise',
}

export enum billingCycleEnum {
  monthly = 'monthly',
  yearly = 'annual',
}

export enum accountStatusEnum {
  created = 'created',
  payment_provided = 'payment_provided',
  documents_provided = 'documents_provided',
  active = 'active',
  inactive = 'inactive',
  deleted = 'deleted',
  email_verified = 'email_verified',
  payment_failed = 'payment_failed',
}

export interface TransactionRecord {
  date: Date;
  amount: number;
  invoiceId: string;
  description?: string;
  status: 'succeeded' | 'failed';
  subscriptionId: string;
  taxAmount: number;
}
export interface AccountEvent {
  type:
    | 'account_updated'
    | 'password_reset'
    | 'email_changed'
    | 'subscription_created'
    | 'subscription_updated'
    | 'subscription_canceled'
    | 'subscription_renewed'
    | 'subscription_paused'
    | 'subscription_resumed'
    | 'payment_succeeded'
    | 'payment_failed'
    | 'invoice_created'
    | 'invoice_updated'
    | 'invoice_paid'
    | 'invoice_failed'
    | string;
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
