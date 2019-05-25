"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseURL = "https://ui-avatars.com/api/?";
/**
 * Generates a UI Avatar image URL that you can supply to your `<img/>` tag.
 * @param settings {UIAvatarSettings} A settings object with any custom values.
 * @returns Returns a image stream to be used directly in an `<img/>` tag.
 */
function generateAvatar(settings) {
    let apiURL = baseURL;
    if (!settings) {
        return apiURL;
    }
    if (settings.name) {
        apiURL += `name=${settings.name}&`;
    }
    if (settings.background) {
        apiURL += `background=${settings.background}&`;
    }
    if (settings.color) {
        apiURL += `color=${settings.color}&`;
    }
    if (settings.size) {
        apiURL += `size=${settings.size}&`;
    }
    if (settings.fontsize) {
        apiURL += `font-size=${settings.fontsize}&`;
    }
    if (settings.length) {
        apiURL += `length=${settings.length}&`;
    }
    if (settings.rounded) {
        apiURL += `rounded=${settings.rounded}&`;
    }
    if (settings.bold) {
        apiURL += `bold=${settings.bold}&`;
    }
    if (settings.uppercase) {
        apiURL += `uppercase=${settings.uppercase}&`;
    }
    // Remove the & character from the end of the URL if it exists
    if (apiURL.substr(apiURL.length - 1) === '&') {
        apiURL = apiURL.substring(0, apiURL.length - 1);
    }
    return apiURL;
}
exports.generateAvatar = generateAvatar;
