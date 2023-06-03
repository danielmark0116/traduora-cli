export interface Config {
    username: string;
    password: string;
    baseUrl: string;
    projectId: string;
}
export declare const config: (key?: "password" | "username" | "baseUrl" | "projectId" | undefined) => Config;
