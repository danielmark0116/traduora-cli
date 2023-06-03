import Command from '../../command';
import { flags } from '@oclif/command';
export default class LabelAdd extends Command {
    static description: string;
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        color: flags.IOptionFlag<string | undefined>;
    };
    static args: {
        name: string;
        required: boolean;
    }[];
    run(): Promise<void>;
}
