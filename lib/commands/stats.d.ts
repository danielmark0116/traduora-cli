import Command from '../command';
export default class Stats extends Command {
    static description: string;
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
    };
    run(): Promise<void>;
}
