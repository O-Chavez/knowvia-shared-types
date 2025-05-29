export interface KnowledgeBase {
    documents: ChatContextDocument[];
    tokenUsage: number;
    tokenLimit?: number;
}
export interface ChatContextDocument {
    name: string;
    s3Key: string;
    tokenCount: number;
    uploadedAt: Date;
    source?: 'upload' | 'manual' | 'url';
    mimeType?: string;
}
