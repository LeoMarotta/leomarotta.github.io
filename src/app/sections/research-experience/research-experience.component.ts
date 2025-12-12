// research-experience.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { JobExperience } from '../experience/experience.component';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-research-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './research-experience.component.html',
  styleUrls: ['./research-experience.component.css']
})
export class ResearchExperienceComponent {
  constructor(public languageService: LanguageService) {}

  get researchExperiences(): JobExperience[] {
    return [
      {
        title: this.languageService.translate('exp.dev-software-intern'),
        company: 'Mertins Tecnologias',
        period: this.languageService.translate('period.nov2023-jan2024'),
        icon: 'code',
        description: [
          this.languageService.translate('exp.desc3.1'),
          this.languageService.translate('exp.desc3.2'),
          this.languageService.translate('exp.desc3.3'),
        ],
        techTags: ['java', 'postgresql', 'glassfish', 'full-stack', this.languageService.translate('tag.payara'), this.languageService.translate('tag.documentation'), this.languageService.translate('tag.bug-fixing')]
      },
      {
        title: this.languageService.translate('exp.researcher'),
        company: 'Hub de Inovação em IA (UFPel)',
        period: this.languageService.translate('period.jul2024-present'),
        icon: 'code',
        description: [
          this.languageService.translate('exp.desc4.1'),
          this.languageService.translate('exp.desc4.2'),
          this.languageService.translate('exp.desc4.3'),
        ],
        techTags: ['nlp', 'python', 'pandas', 'nltk', this.languageService.translate('tag.data-analysis'), this.languageService.translate('tag.vulnerability-analysis'), this.languageService.translate('tag.datasets'), this.languageService.translate('tag.research')]
      }
    ];
  }

  isEven(index: number): boolean {
    return (index % 2) !== 0;
  }
}
