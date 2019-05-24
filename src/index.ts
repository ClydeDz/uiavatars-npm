const baseURL = "https://ui-avatars.com/api/?";

interface UIAvatarConfig {
    name?: string, 
    background?: string,
    color?: string, 
    size?: number, 
    fontsize?: number, 
    length?: number,
    rounded?: boolean, 
    bold?: boolean, 
    uppercase?: boolean
}

export function generateAvatar(config: UIAvatarConfig): string {
    let apiURL = baseURL;

    if(!config){
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