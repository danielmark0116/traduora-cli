"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const config_1 = require("./helpers/config");
const project_service_1 = require("./services/project.service");
const label_service_1 = require("./services/label.service");
const language_service_1 = require("./services/language.service");
const term_service_1 = require("./services/term.service");
const export_service_1 = require("./services/export.service");
const fetch_1 = require("./helpers/fetch");
class default_1 extends command_1.Command {
    constructor() {
        super(...arguments);
        this.projectService = new project_service_1.ProjectService();
        this.labelService = new label_service_1.LabelService();
        this.languageService = new language_service_1.LanguageService();
        this.termService = new term_service_1.TermService();
        this.exportService = new export_service_1.ExportService();
    }
    async project() {
        return await fetch_1.get(`projects/${config_1.config('projectId')}`);
    }
    rc() {
        try {
            return config_1.config();
        }
        catch (error) {
            this.warn(`No .traduorarc[.js|.json] file found in ${process.cwd()}`);
            this.exit(0);
        }
    }
}
exports.default = default_1;
