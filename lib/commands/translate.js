"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("../command");
const flags_1 = require("../helpers/flags");
const command_2 = require("@oclif/command");
const fetch_1 = require("../helpers/fetch");
const config_1 = require("../helpers/config");
class Translate extends command_1.default {
    constructor() {
        super(...arguments);
        this.term = async (input) => {
            const terms = await fetch_1.get(`projects/${config_1.config('projectId')}/terms`);
            const found = await terms.find((t) => t.value === input);
            if (!found) {
                this.warn('Term does not exist');
                this.exit();
            }
            return found;
        };
        this.locale = async (code) => {
            const res = await fetch_1.get(`projects/${config_1.config('projectId')}/translations`);
            const found = res.find(({ locale }) => locale.code === code);
            return Boolean(found);
        };
    }
    async run() {
        const { args: { value }, flags: { term, code } } = this.parse(Translate);
        const localeIsAdded = await this.locale(code);
        if (!localeIsAdded) {
            this.warn(`Language (${code}) is not added to the project`);
            this.exit(2);
        }
        const result = await fetch_1.post(`projects/${config_1.config('projectId')}/translations/${code}`, {
            termId: (await this.term(term)).id,
            value,
        }, 'PATCH');
        if (result.code) {
            return this.log(result);
        }
        this.log(`Term: ${term} is translated to '${result.value}' for locale: ${code}`);
    }
}
exports.default = Translate;
Translate.description = 'Translate a term to a given locale';
// static hidden = true;
Translate.flags = {
    help: flags_1.helpFlag(),
    term: command_2.flags.string({
        char: 't',
        required: true,
    }),
    code: command_2.flags.string({
        char: 'c',
        required: true,
    })
};
Translate.args = [
    {
        name: 'value',
        required: true,
    },
];
