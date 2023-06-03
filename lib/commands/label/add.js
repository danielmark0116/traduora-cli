"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flags_1 = require("../../helpers/flags");
const command_1 = require("../../command");
const command_2 = require("@oclif/command");
const color_1 = require("../../helpers/color");
class LabelAdd extends command_1.default {
    async run() {
        const { args: { name }, flags: { color } } = this.parse(LabelAdd);
        const selectedColor = color ? color : color_1.randomHexColor();
        if (!color_1.isValidHex(selectedColor)) {
            this.warn('Color is not a hex color');
            this.exit();
        }
        const result = await this.labelService.add({
            value: name,
            color: selectedColor,
        });
        if (result.code) {
            this.warn(result.message || '');
            this.exit();
        }
        const label = color_1.labelWithBackground({
            color: result.color,
            value: result.value,
        });
        this.log(`The label ${label} was created`);
    }
}
exports.default = LabelAdd;
LabelAdd.description = 'Create a label';
LabelAdd.flags = {
    help: flags_1.helpFlag(),
    color: command_2.flags.string({
        char: 'c',
        description: 'Color of the label',
        name: 'color',
    })
};
LabelAdd.args = [{
        name: 'name',
        required: true,
    }];
