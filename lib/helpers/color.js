"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const tinycolor = require("tinycolor2");
exports.isValidHex = (color) => {
    if (!color || typeof color !== 'string') {
        return false;
    }
    if (color.startsWith('#')) {
        color = color.substring(1);
    }
    switch (color.length) {
        case 3: return /^[0-9A-F]{3}$/i.test(color);
        case 6: return /^[0-9A-F]{6}$/i.test(color);
        case 8: return /^[0-9A-F]{8}$/i.test(color);
        default: return false;
    }
};
exports.textColor = (color) => {
    return tinycolor(color).isDark() ? '#ffffff' : '#000000';
};
exports.labelWithBackground = ({ color, value }) => {
    return chalk.bgHex(color)(chalk.hex(exports.textColor(color))(` ${value} `));
};
exports.randomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
