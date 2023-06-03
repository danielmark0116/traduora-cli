"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = require("../helpers/fetch");
const config_1 = require("../helpers/config");
class LabelService {
    constructor() {
        this.get = async () => {
            return await fetch_1.get(`projects/${config_1.config('projectId')}/labels`);
        };
        this.add = async (body) => {
            return await fetch_1.post(`projects/${config_1.config('projectId')}/labels`, body);
        };
        this.findBy = async (key, value) => {
            const labels = await this.get();
            return labels.find((label) => label[key] === value);
        };
    }
}
exports.LabelService = LabelService;
