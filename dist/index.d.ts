interface UIAvatarConfig {
    name?: string;
    background?: string;
    color?: string;
    size?: number;
    fontsize?: number;
    length?: number;
    rounded?: boolean;
    bold?: boolean;
    uppercase?: boolean;
}
export declare function generateAvatar(config: UIAvatarConfig): string;
export {};
