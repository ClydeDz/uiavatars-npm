const baseURL = "https://ui-avatars.com/api/?";
const stringStartIndex = 0;
const stringTrimIndexFromEnd = 1;

/**
 * Settings that you can supply to generate a custom UI Avatar.
 */
interface UIAvatarSettings {
    /**
     * The name used to generate initials. 
     * You can specify the initials yourself as well. 
     * Default: John Doe
     */
    name?: string,
    /**
     * Hex color for the image background, without the hash (#). 
     * Default: f0e9e9
     */
    background?: string,
    /**
     * Hex color for the font, without the hash (#). 
     * Default: 8b5d5d
     */
    color?: string,
    /**
     * Avatar image size in pixels. Between: 16 and 512. 
     * Default: 64
     */
    size?: number,
    /**
     * Font size in percentage of size. Between 0.1 and 1. 
     * Default: 0.5
     */
    fontsize?: number,
    /**
     * Length of the generated initials. 
     * Default: 2
     */
    length?: number,
    /**
     * Boolean specifying if the returned image should be a circle. 
     * Default: false
     */
    rounded?: boolean,
    /**
     * Boolean specifying if the returned letters should use a bold font. 
     * Default: false
     */
    bold?: boolean,
    /**
     * Decide if the API should uppercase the name/initials. 
     * Default: true
     */
    uppercase?: boolean
}

/**
 * Generates a UI Avatar image URL that you can supply to your `<img/>` tag.
 * @param settings {UIAvatarSettings} A settings object with any custom values.
 * @returns Returns a image stream to be used directly in an `<img/>` tag.
 */
export function generateAvatar(settings: UIAvatarSettings): string {
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
