"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseURL = "https://ui-avatars.com/api/?";
const stringStartIndex = 0;
const stringTrimIndexFromEnd = 1;
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
    apiURL = settings.name ? `${apiURL}name=${settings.name}&` : apiURL;
    apiURL = settings.background ? `${apiURL}background=${settings.background}&` : apiURL;
    apiURL = settings.color ? `${apiURL}color=${settings.color}&` : apiURL;
    apiURL = settings.size ? `${apiURL}size=${settings.size}&` : apiURL;
    apiURL = settings.fontsize ? `${apiURL}font-size=${settings.fontsize}&` : apiURL;
    apiURL = settings.length ? `${apiURL}length=${settings.length}&` : apiURL;
    apiURL = settings.rounded ? `${apiURL}rounded=${settings.rounded}&` : apiURL;
    apiURL = settings.bold ? `${apiURL}bold=${settings.bold}&` : apiURL;
    apiURL = settings.uppercase ? `${apiURL}uppercase=${settings.uppercase}&` : apiURL;
    // Remove the & character from the end of the URL if it exists
    var doesURLEndWithAmpersand = apiURL.substr(apiURL.length - 1) === "&";
    apiURL = doesURLEndWithAmpersand ? apiURL.substring(stringStartIndex, apiURL.length - stringTrimIndexFromEnd) : apiURL;
    return apiURL;
}
exports.generateAvatar = generateAvatar;
