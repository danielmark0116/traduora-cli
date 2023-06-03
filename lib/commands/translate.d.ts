import Command from '../command';
import { flags } from '@oclif/command';
export default class Translate extends Command {
    static description: string;
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        term: flags.IOptionFlag<string>;
        code: flags.IOptionFlag<string>;
    };
    static args: {
        name: string;
        required: boolean;
    }[];
    run(): Promise<void>;
    private term;
    private locale;
}
