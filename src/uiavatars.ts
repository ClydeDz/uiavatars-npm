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
 * Checks if supplied setting exists and valid and constructs the query string part
 * of the API URL accordingly.
 * @param key The key part of the query string.
 * @param setting The setting that needs to be supplied as the value for that key.
 */
function resolveSettings(key:string, setting: any) : string{
    if(!setting){
        return "";
    }
    return  `${key}=${setting}&`;
}

/**
 * Remove the & character from the end of the URL if it exists.
 * @param apiURL The API URL being constructed
 */
function trimAmpersandIfExists(apiURL: string){
    const doesURLEndWithAmpersand = apiURL.substr(apiURL.length - 1) === "&";
    if(!doesURLEndWithAmpersand){
        return apiURL;
    }
    return apiURL.substring(stringStartIndex, apiURL.length - stringTrimIndexFromEnd);
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
