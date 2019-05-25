const baseURL = "https://ui-avatars.com/api/?";

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

    if(!settings){
        return apiURL;
    }    

    if (settings.name && settings.name != "") {
        apiURL += `&name=${settings.name}`;
    }

    if (settings.background) {
        apiURL += `&background=${settings.background}`;
    }
    
    if (settings.color && settings.color != "") {
        apiURL += `&color=${settings.color}`;
    }

    if (settings.size) {
        apiURL += `&size=${settings.size}`;
    }

    if (settings.fontsize) {
        apiURL += `&font-size=${settings.fontsize}`;
    }

    if (settings.length) {
        apiURL += `&length=${settings.length}`;
    }

    if (settings.rounded) {
        apiURL += `&rounded=${settings.rounded}`;
    }

    if (settings.bold) {
        apiURL += `&bold=${settings.bold}`;
    }

    if (settings.uppercase) {
        apiURL += `&uppercase=${settings.uppercase}`;
    }

    return apiURL;
}