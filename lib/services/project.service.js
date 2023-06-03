"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = require("../helpers/fetch");
const config_1 = require("../helpers/config");
// export const ProjectService = {
//     get: async (): Promise<Project> => await get(`projects/${config('projectId')}`)
// }
class ProjectService {
    constructor() {
        this.get = async () => {
            return await fetch_1.get(`projects/${config_1.config('projectId')}`);
        };
    }
}
exports.ProjectService = ProjectService;
