import { flags } from '@oclif/command';
import Command from '../command';
export default class Export extends Command {
    static description: string;
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        code: flags.IOptionFlag<string>;
        format: flags.IOptionFlag<string>;
    };
    static usage: string[];
    run(): Promise<void>;
}
