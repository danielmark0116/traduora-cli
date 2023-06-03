"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("../../command");
const flags_1 = require("../../helpers/flags");
const fetch_1 = require("../../helpers/fetch");
class LanguageAdd extends command_1.default {
    async run() {
        const { args: { code } } = this.parse(LanguageAdd);
        const languages = await fetch_1.get('locales');
        if (!languages.find(language => language.code === code)) {
            this.warn(`Provided (${code}) code does not exist.`);
            this.exit();
        }
        const response = await this.languageService.add(code);
        this.log(response);
    }
}
exports.default = LanguageAdd;
LanguageAdd.description = 'describe the command here';
LanguageAdd.flags = {
    help: flags_1.helpFlag()
};
LanguageAdd.args = [{
        name: 'code',
        required: true,
    }];
