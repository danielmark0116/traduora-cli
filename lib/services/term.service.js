"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = require("../helpers/fetch");
const config_1 = require("../helpers/config");
class TermService {
    constructor() {
        this.add = async (term) => {
            return await fetch_1.post(`projects/${config_1.config('projectId')}/terms`, {
                value: term,
            });
        };
    }
}
exports.TermService = TermService;
