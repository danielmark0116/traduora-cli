import { Locale } from '../types/language.type';
import { TermResponse } from './label.service';
export declare class LanguageService {
    add: (code: string) => Promise<TermResponse | Locale>;
    find: (code: string) => Promise<Locale | undefined>;
}
