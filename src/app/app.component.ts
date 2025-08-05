import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

// Imports dos Módulos do Angular Material que serão usados nos componentes filhos
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

// Imports dos seus componentes de seção
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // Módulos do Material
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    // Seus componentes
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren('section', { read: ElementRef }) sections!: QueryList<ElementRef>;

  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // A animação dispara quando 50% da seção está visível
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          // Opcional: se quiser que a animação aconteça sempre que rolar para cima e para baixo
          // entry.target.classList.remove('is-visible');
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
