export interface KnowledgeBase {
  documents: ChatContextDocument[];
  tokenUsage: number;
  tokenLimit?: number; // Optional override per account
}

export interface ChatContextDocument {
  name: string;
  s3Key: string;
  tokenCount: number;
  uploadedAt: Date;
  source?: 'upload' | 'manual' | 'url';
  mimeType: string;
  content: string;
}
