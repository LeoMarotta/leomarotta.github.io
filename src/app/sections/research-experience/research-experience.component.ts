// research-experience.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { JobExperience } from '../experience/experience.component';

@Component({
  selector: 'app-research-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './research-experience.component.html',
  styleUrls: ['./research-experience.component.css']
})
export class ResearchExperienceComponent {
  public researchExperiences: JobExperience[] = [
    {
      title: 'Desenvolvedor de Software (Estagiário)',
      company: 'Mertins Tecnologias',
      period: 'Novembro 2023 - Janeiro 2025',
      icon: 'code',
      description: [
        'Desenvolvi e mantive aplicações full-stack em Java, utilizando um framework proprietário, servidor Glassfish/Payara e PostgreSQL.',
        'Realizei a manutenção de aplicações Java, corrigindo bugs e implementando melhorias contínuas para atender às necessidades dos usuários.',
        'Elaborei e mantive documentação técnica detalhada, facilitando a compreensão e manutenção do código por outros desenvolvedores.',
      ],
      techTags: ['java', 'postgresql', 'glassfish', 'full-stack']
    },
    {
      title: 'Pesquisador Voluntário',
      company: 'Hub de Inovação em IA (UFPel)',
      period: 'Julho 2024 - Presente',
      icon: 'code',
      description: [
        'Analisei e interpretei dados de pesquisas científicas.',
        'Executei tarefas relacionadas a Processamento de Linguagem Natural (NLP) e análise de riscos e vulnerabilidades.',
        'Desenvolvi anotações para conjuntos de dados e criei relatórios de pesquisa para documentar os resultados.',
      ],
      techTags: ['nlp', 'python', 'pandas', 'nltk', 'pesquisa']
    }
  ];

  isEven(index: number): boolean {
    return (index % 2) !== 0;
  }
}
