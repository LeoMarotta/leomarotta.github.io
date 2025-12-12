import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

// Imports dos seus componentes de seção
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ResearchExperienceComponent } from './sections/research-experience/research-experience.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import { EducationComponent } from './sections/education/education.component';
import { LanguagesComponent } from './sections/languages/languages.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ResearchExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    LanguagesComponent,
    ContactComponent,
    LanguageSwitcherComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren('section', { read: ElementRef }) sections!: QueryList<ElementRef>;

  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    // Usar um pequeno timeout garante que todos os elementos filhos estejam
    // definitivamente prontos no DOM antes de começarmos a observá-los.
    setTimeout(() => this.setupObserver(), 0);
  }

  private setupObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, options);

    this.sections.forEach(section => {
      if (section.nativeElement) {
        this.observer?.observe(section.nativeElement);
      }
    });
  }
}
