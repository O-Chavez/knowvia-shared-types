export interface ChatCustomization {
    selectedThemeName: string;
    styleOverrides?: Partial<ChatTheme>;
    initialMessage?: string;
}
export interface ChatTheme {
    name: string;
    iconColor: string;
    iconBg: string;
    iconBorderColor: string;
    headerFooterColor: string;
    chatBg: string;
    sentBubbleColor: string;
    receivedBubbleColor: string;
    sentTextColor: string;
    receivedTextColor: string;
    textInputColor: string;
    sendButtonColor: string;
    borderRadius: string;
}
export declare const CHAT_THEME_DISPLAY_NAMES: Record<keyof ChatTheme, string>;
export declare const CHAT_THEMES: ChatTheme[];
