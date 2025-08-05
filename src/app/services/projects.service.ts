// src/app/services/projects.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects() {
    return [
      {
        id: 1,
        title: 'Leonardo Portfolio',
        description: 'Uma descrição detalhada sobre este incrível projeto que desenvolvi.',
        techs: ['Angular', 'TypeScript', 'HTML5'],
        imageUrl: 'assets/images/projeto1.png' // Coloque a imagem em src/assets/images
      },
      {
        id: 2,
        title: 'Sistema de Gestão',
        description: 'Um sistema complexo para gerenciar tarefas e equipes.',
        techs: ['Java', 'Spring Boot', 'Angular'],
        imageUrl: 'assets/images/projeto2.png'
      }
    ];
  }
}
