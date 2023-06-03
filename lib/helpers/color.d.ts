import { Label } from '../types/label.type';
export declare const isValidHex: (color: string) => boolean;
export declare const textColor: (color: string) => "#ffffff" | "#000000";
export declare const labelWithBackground: ({ color, value }: Label) => string;
export declare const randomHexColor: () => string;
