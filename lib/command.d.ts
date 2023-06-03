import { Command } from '@oclif/command';
import { Config } from './helpers/config';
import { ProjectService } from './services/project.service';
import { LabelService } from './services/label.service';
import { LanguageService } from './services/language.service';
import { TermService } from './services/term.service';
import { ExportService } from './services/export.service';
import { Project } from './types/project.type';
export default abstract class extends Command {
    readonly projectService: ProjectService;
    readonly labelService: LabelService;
    readonly languageService: LanguageService;
    readonly termService: TermService;
    readonly exportService: ExportService;
    project(): Promise<Project>;
    rc(): Config;
}
