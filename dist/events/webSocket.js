/**
 * Main types of messages that can be sent and received over the WebSocket.
 */
export var WsMessageType;
(function (WsMessageType) {
    WsMessageType["System"] = "system";
    WsMessageType["Chat"] = "chat";
    WsMessageType["Ping"] = "ping";
    WsMessageType["Error"] = "error";
})(WsMessageType || (WsMessageType = {}));
export var LeadTemperature;
(function (LeadTemperature) {
    LeadTemperature["Hot"] = "hot";
    LeadTemperature["Warm"] = "warm";
    LeadTemperature["Cold"] = "cold";
})(LeadTemperature || (LeadTemperature = {}));
export var LeadStatus;
(function (LeadStatus) {
    LeadStatus["New"] = "new";
    LeadStatus["Contacted"] = "contacted";
    LeadStatus["Converted"] = "converted";
    LeadStatus["Archived"] = "archived";
})(LeadStatus || (LeadStatus = {}));
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
