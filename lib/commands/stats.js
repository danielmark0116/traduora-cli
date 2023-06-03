"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("../command");
const fetch_1 = require("../helpers/fetch");
const flags_1 = require("../helpers/flags");
const config_1 = require("../helpers/config");
class Stats extends command_1.default {
    async run() {
        const response = await fetch_1.get(`projects/${config_1.config('projectId')}/stats`);
        this.log(`Project stats for: ${(await this.project()).name}`);
        this.log(`Progress: ${Number(response.projectStats.progress * 100).toFixed(0)}%`);
        this.log(`Translated: ${response.projectStats.translated}`);
        this.log(`Number of terms: ${response.projectStats.terms}`);
        this.log(`Number of locales: ${response.projectStats.locales}`);
        this.log('\n');
        this.log('Code  - Progress');
        Object.keys(response.localeStats).map((langCode) => {
            const { progress } = response.localeStats[langCode];
            const code = langCode.length === 2 ? `${langCode}   ` : langCode;
            this.log(`${code} - ${progress * 100}%`);
        });
    }
}
exports.default = Stats;
Stats.description = 'Project stats';
Stats.flags = {
    help: flags_1.helpFlag(),
};
