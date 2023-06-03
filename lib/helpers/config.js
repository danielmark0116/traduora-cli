"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sync = require('rc-parser/sync');
const { NO_EXT } = require('rc-parser');
exports.config = (key) => {
    const options = {
        path: process.cwd(),
        name: '.traduorarc',
        extensions: ['json', 'js', 'yaml', 'yml', NO_EXT],
    };
    const rc = sync(options);
    if (!rc) {
        throw `No .traduorarc file found in ${process.cwd()}`;
    }
    return key
        ? rc.value[key]
        : rc.value;
};
