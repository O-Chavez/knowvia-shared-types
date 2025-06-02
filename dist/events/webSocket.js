/**
 * Main types of messages that can be sent and received over the WebSocket.
 */
export var WsMessageType;
(function (WsMessageType) {
    WsMessageType["System"] = "system";
    WsMessageType["Chat"] = "chat";
    WsMessageType["Error"] = "error";
})(WsMessageType || (WsMessageType = {}));
export var LeadStatus;
(function (LeadStatus) {
    LeadStatus["new"] = "new";
    LeadStatus["contacted"] = "contacted";
    LeadStatus["qualified"] = "qualified";
    LeadStatus["converted"] = "converted";
    LeadStatus["archived"] = "archived";
})(LeadStatus || (LeadStatus = {}));
export var LeadTemperature;
(function (LeadTemperature) {
    LeadTemperature["cold"] = "cold";
    LeadTemperature["warm"] = "warm";
    LeadTemperature["hot"] = "hot";
})(LeadTemperature || (LeadTemperature = {}));
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
