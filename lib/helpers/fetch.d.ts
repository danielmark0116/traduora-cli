export declare const getToken: () => Promise<any>;
export declare const headersWithToken: () => Promise<{
    'content-type': string;
    authorization: string;
}>;
export declare const get: (uri: string) => Promise<any>;
export declare const post: (uri: string, body: any, method?: "POST" | "PATCH") => Promise<any>;
