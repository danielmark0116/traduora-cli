"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("../../command");
const flags_1 = require("../../helpers/flags");
class TermAdd extends command_1.default {
    async run() {
        const { args: { name } } = this.parse(TermAdd);
        const result = await this.termService.add(name);
        if (result.code && result.message) {
            this.warn(result.message);
            this.exit();
        }
        this.log(`The term ${result.value} was added`);
    }
}
exports.default = TermAdd;
TermAdd.description = 'Create a term';
TermAdd.flags = {
    help: flags_1.helpFlag(),
};
TermAdd.args = [{
        name: 'name',
        required: true,
    }];
