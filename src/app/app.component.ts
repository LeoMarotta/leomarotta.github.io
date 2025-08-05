// src/app/app.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Seus outros componentes importados (Hero, About, etc.) virão aqui
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
// ... etc

// 1. IMPORTAR O MÓDULO DO ÍCONE AQUI
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Este é o import que o terminal avisou não estar sendo usado

    // Seus outros componentes (Hero, About, etc.) devem estar listados aqui
    HeroComponent,
    AboutComponent,
    // ... etc

    // 2. ADICIONAR O MatIconModule NA LISTA DE IMPORTS AQUI
    MatIconModule

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ou .css
})
export class AppComponent {
  title = 'leomarotta.github.io';
}
