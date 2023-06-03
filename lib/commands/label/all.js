"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flags_1 = require("../../helpers/flags");
const command_1 = require("../../command");
const color_1 = require("../../helpers/color");
class LabelAll extends command_1.default {
    async run() {
        const result = await this.labelService.get();
        result.map((label) => {
            this.log(color_1.labelWithBackground(label));
        });
    }
}
exports.default = LabelAll;
LabelAll.description = 'Get a list of all labels';
LabelAll.flags = {
    help: flags_1.helpFlag(),
};
