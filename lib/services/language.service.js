"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = require("../helpers/fetch");
const config_1 = require("../helpers/config");
class LanguageService {
    constructor() {
        this.add = async (code) => {
            return await fetch_1.post(`projects/${config_1.config('projectId')}/translations`, { code });
        };
        this.find = async (code) => {
            const result = await fetch_1.get(`projects/${config_1.config('projectId')}/translations`);
            return result.find((locale) => locale.locale.code === code);
        };
    }
}
exports.LanguageService = LanguageService;
