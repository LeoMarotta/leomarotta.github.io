// src/app/components/portfolio/portfolio.component.ts
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public projects: any[] = []; // Criamos uma variável para guardar os projetos

  constructor(private projectsService: ProjectsService) { } // Injetamos o serviço

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects(); // Buscamos os projetos
  }

}
