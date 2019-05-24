"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseURL = "https://ui-avatars.com/api/?";
function generateAvatar(name, background, color, size, fontsize, length, rounded, bold, uppercase) {
    let apiURL = baseURL;
    if (name != null && name != "") {
        apiURL += `&name=${name}`;
    }
    if (background != null && background != "") {
        apiURL += `&background=${background}`;
    }
    if (color != null && color != "") {
        apiURL += `&color=${color}`;
    }
    if (size != undefined) {
        apiURL += `&size=${size}`;
    }
    if (fontsize != undefined) {
        apiURL += `&fontsize=${fontsize}`;
    }
    if (length != undefined) {
        apiURL += `&length=${length}`;
    }
    if (rounded) {
        apiURL += `&rounded=${rounded}`;
    }
    if (bold) {
        apiURL += `&bold=${bold}`;
    }
    if (uppercase) {
        apiURL += `&uppercase=${uppercase}`;
    }
    return apiURL;
}
exports.generateAvatar = generateAvatar;
