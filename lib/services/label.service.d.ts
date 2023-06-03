import { Label, AddLabel } from '../types/label.type';
import { Error } from '../types/error.type';
export interface TermResponse extends Error, Label {
}
export declare class LabelService {
    get: () => Promise<Label[]>;
    add: (body: AddLabel) => Promise<TermResponse>;
    findBy: (key: "id" | "value" | "color", value: string) => Promise<Label | undefined>;
}
