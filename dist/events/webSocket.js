/**
 * Main types of messages that can be sent and received over the WebSocket.
 */
export var WsMessageType;
(function (WsMessageType) {
    WsMessageType["System"] = "system";
    WsMessageType["Chat"] = "chat";
    WsMessageType["Error"] = "error";
})(WsMessageType || (WsMessageType = {}));
export function isChatMessage(data) {
    return (typeof data?.message === 'string' &&
        (data.role === 'assistant' || data.role === 'user'));
}
export function isErrorMessage(data) {
    return typeof data?.errorType === 'string';
}
export function isSystemInfo(data) {
    return (typeof data === 'object' &&
        (data.organizationName !== undefined ||
            data.apiKey !== undefined ||
            data.selectedThemeName !== undefined));
}
