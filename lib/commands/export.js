"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const command_2 = require("../command");
const flags_1 = require("../helpers/flags");
class Export extends command_2.default {
    async run() {
        const { flags: { code, format } } = this.parse(Export);
        const response = await this.exportService.get(code, format);
        this.log(response);
    }
}
exports.default = Export;
Export.description = 'Exports all translations based on a locale';
Export.flags = {
    help: flags_1.helpFlag(),
    code: command_1.flags.string({
        char: 'c',
        required: true
    }),
    format: command_1.flags.string({
        char: 'f',
        default: 'jsonflat',
        options: ['jsonflat', 'jsonnested', 'js'],
    }),
};
Export.usage = [
    'export --code=en_GB > ./locale/gb_GB.json',
];
