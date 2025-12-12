// experience.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LanguageService } from '../../services/language.service';

export interface JobExperience {
  title: string;
  company: string;
  period: string;
  icon: string;
  description: string[];
  techTags: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  constructor(public languageService: LanguageService) {}

  get experiences(): JobExperience[] {
    return [
      {
        title: this.languageService.translate('exp.dev-backend'),
        company: 'Augen Engenharia S.A.',
        period: this.languageService.translate('period.sep2024-present'),
        icon: 'code',
        description: [
          this.languageService.translate('exp.desc1.1'),
          this.languageService.translate('exp.desc1.2'),
          this.languageService.translate('exp.desc1.3'),
          this.languageService.translate('exp.desc1.4'),
        ],
        techTags: ['php', 'laravel', 'aws', 'postgresql', 'docker', 'devops', this.languageService.translate('tag.vpc'), this.languageService.translate('tag.security-headers'), this.languageService.translate('tag.cost-optimization')]
      },
      {
        title: this.languageService.translate('exp.dev-backend-intern'),
        company: 'Augen Engenharia S.A.',
        period: this.languageService.translate('period.jan2024-sep2024'),
        icon: 'code',
        description: [
          this.languageService.translate('exp.desc2.1'),
          this.languageService.translate('exp.desc2.2'),
          this.languageService.translate('exp.desc2.3'),
          this.languageService.translate('exp.desc2.4'),
        ],
        techTags: ['python', this.languageService.translate('tag.aws-lambda'), 'php', 'laravel', 'docker', 'ci/cd', 'sqs', this.languageService.translate('tag.iot'), this.languageService.translate('tag.serverless'), this.languageService.translate('tag.cdn')]
      }
    ];
  }

  isEven(index: number): boolean {
    return (index % 2) !== 0;
  }
}
