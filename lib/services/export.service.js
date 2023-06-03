"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../helpers/config");
const fetch_1 = require("../helpers/fetch");
const node_fetch_1 = require("node-fetch");
class ExportService {
    constructor() {
        this.get = async (code, format) => {
            const url = `${config_1.config('baseUrl')}/projects/${config_1.config('projectId')}/exports?locale=${code}&format=${format}`;
            const response = await node_fetch_1.default(url, {
                headers: await fetch_1.headersWithToken()
            }).then(r => r.json());
            if (format === 'js') {
                return 'module.exports = {' + JSON.stringify(response) + '}';
            }
            return JSON.stringify(response);
        };
    }
}
exports.ExportService = ExportService;
