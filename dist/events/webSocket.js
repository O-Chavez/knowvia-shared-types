/**
 * Main types of messages that can be sent and received over the WebSocket.
 */
export var WsMessageType;
(function (WsMessageType) {
    WsMessageType["System"] = "system";
    WsMessageType["Chat"] = "chat";
    WsMessageType["Error"] = "error";
})(WsMessageType || (WsMessageType = {}));
