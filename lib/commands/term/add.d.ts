import Command from '../../command';
export default class TermAdd extends Command {
    static description: string;
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
    };
    static args: {
        name: string;
        required: boolean;
    }[];
    run(): Promise<void>;
}
