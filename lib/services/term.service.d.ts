import { Error } from '../types/error.type';
import { Term } from '../types/term.type';
export interface TermResponse extends Error, Term {
}
export declare class TermService {
    add: (term: string) => Promise<TermResponse>;
}
