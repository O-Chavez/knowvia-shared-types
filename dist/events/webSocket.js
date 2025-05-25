/**
 * Main types of messages that can be sent and recieved over the WebSocket.
 * @param System System messages / Init messages
 * @param Chat Chat messages
 * @param Error Error messages
 */
export var WsMessageType;
(function (WsMessageType) {
    WsMessageType["System"] = "system";
    WsMessageType["Chat"] = "chat";
    WsMessageType["Error"] = "error";
})(WsMessageType || (WsMessageType = {}));
