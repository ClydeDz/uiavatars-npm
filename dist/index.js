"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseURL = "https://ui-avatars.com/api/?";
function generateAvatar(config) {
    let apiURL = baseURL;
    if (!config) {
        return apiURL;
    }
    if (config.name && config.name != "") {
        apiURL += `&name=${config.name}`;
    }
    if (config.background) {
        apiURL += `&background=${config.background}`;
    }
    if (config.color && config.color != "") {
        apiURL += `&color=${config.color}`;
    }
    if (config.size) {
        apiURL += `&size=${config.size}`;
    }
    if (config.fontsize) {
        apiURL += `&fontsize=${config.fontsize}`;
    }
    if (config.length) {
        apiURL += `&length=${config.length}`;
    }
    if (config.rounded) {
        apiURL += `&rounded=${config.rounded}`;
    }
    if (config.bold) {
        apiURL += `&bold=${config.bold}`;
    }
    if (config.uppercase) {
        apiURL += `&uppercase=${config.uppercase}`;
    }
    return apiURL;
}
exports.generateAvatar = generateAvatar;
