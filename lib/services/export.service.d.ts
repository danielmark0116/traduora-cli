export declare type ExportFormat = 'js' | 'jsonnested' | 'jsonflat';
export declare class ExportService {
    get: (code: string, format: ExportFormat) => Promise<string>;
}
