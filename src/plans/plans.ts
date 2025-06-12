export interface Plan {
  name: string;
  description?: string;
  documentTokenLimit: number;
  intervals: {
    monthly: {
      price: number;
      conversationLimit: number;
    };
    yearly?: {
      price: number; // Price for yearly subscription is discounted by 20%

      conversationLimit: number; // Conversation limit is 12 x the monthly limit
    };
  };
}

export const SubscriptionPlans: Plan[] = [
  {
    name: 'Starter',
    documentTokenLimit: 5000,
    intervals: {
      monthly: {
        price: 100.0,
        conversationLimit: 50,
      },
      yearly: {
        price: 960.0,

        conversationLimit: 600,
      },
    },
  },
  {
    name: 'Growth',
    documentTokenLimit: 20000,
    intervals: {
      monthly: {
        price: 250.0,
        conversationLimit: 250,
      },
      yearly: {
        price: 2400.0,
        conversationLimit: 3000,
      },
    },
  },
  {
    name: 'Pro',
    documentTokenLimit: 100000,
    intervals: {
      monthly: {
        price: 600.0,
        conversationLimit: 1000,
      },
      yearly: {
        price: 5760.0,
        conversationLimit: 12000,
      },
    },
  },
  {
    name: 'Enterprise',
    documentTokenLimit: 500000,
    intervals: {
      monthly: {
        price: 1500.0,
        conversationLimit: 10000,
      },
      yearly: {
        price: 14400.0,
        conversationLimit: 120000,
      },
    },
  },
];
