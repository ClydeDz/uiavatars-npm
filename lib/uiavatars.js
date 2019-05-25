"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseURL = "https://ui-avatars.com/api/?";
const stringStartIndex = 0;
const stringTrimIndexFromEnd = 1;
/**
 * Checks if supplied setting exists and valid and constructs the query string part
 * of the API URL accordingly.
 * @param key The key part of the query string.
 * @param setting The setting that needs to be supplied as the value for that key.
 */
function resolveSettings(key, setting) {
    if (!setting) {
        return "";
    }
    return `${key}=${setting}&`;
}
/**
 * Remove the & character from the end of the URL if it exists.
 * @param apiURL The API URL being constructed
 */
function trimAmpersandIfExists(apiURL) {
    const doesURLEndWithAmpersand = apiURL.substr(apiURL.length - 1) === "&";
    if (!doesURLEndWithAmpersand) {
        return apiURL;
    }
    return apiURL.substring(stringStartIndex, apiURL.length - stringTrimIndexFromEnd);
}
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
    apiURL += resolveSettings("name", settings.name);
    apiURL += resolveSettings("background", settings.background);
    apiURL += resolveSettings("color", settings.color);
    apiURL += resolveSettings("size", settings.size);
    apiURL += resolveSettings("font-size", settings.fontsize);
    apiURL += resolveSettings("length", settings.length);
    apiURL += resolveSettings("rounded", settings.rounded);
    apiURL += resolveSettings("bold", settings.bold);
    apiURL += resolveSettings("uppercase", settings.uppercase);
    apiURL = trimAmpersandIfExists(apiURL);
    return apiURL;
}
exports.generateAvatar = generateAvatar;
