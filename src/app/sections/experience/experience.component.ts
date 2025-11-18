// experience.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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
  public experiences: JobExperience[] = [
    {
      title: 'Desenvolvedor Back-end e DevOps',
      company: 'Augen Engenharia S.A.',
      period: 'Setembro 2025 - Presente',
      icon: 'code',
      description: [
        'Arquitetei e desenvolvi um novo sistema de precificação do zero, utilizando PHP (Laravel) e PostgreSQL, para automatizar a gestão de valores e otimizar a estratégia comercial da empresa.',
        'Liderei o ciclo de vida completo de novas aplicações, desde a modelagem do banco de dados e desenvolvimento até o deploy em ambientes de produção na AWS, garantindo a entrega contínua e segura.',
        'Implementei melhorias de segurança na infraestrutura de nuvem, incluindo a reconfiguração de políticas de acesso e a otimização de redes (VPC), e conduzi análises para a otimização de custos dos recursos AWS.',
        'Continuei a evolução da plataforma principal em PHP (Laravel), focando na escalabilidade para suportar um volume crescente de dados de IoT e na integração com os novos produtos desenvolvidos.',
      ],
      techTags: ['php', 'laravel', 'aws', 'postgresql', 'docker', 'devops']
    },
    {
      title: 'Desenvolvedor Back-end (Estagiário)',
      company: 'Augen Engenharia S.A.',
      period: 'Janeiro 2025 - Setembro 2025',
      icon: 'code',
      description: [
        'Desenvolvi um fluxo de trabalho orientado a eventos, criando funções AWS Lambda em Python para processar um alto volume de mensagens de IoT, integrando-as a uma aplicação principal em PHP (Laravel) para análise de dados.',
        'Realizei a manutenção e o desenvolvimento de novas funcionalidades para o sistema PHP (Laravel), com foco em sua performance e escalabilidade.',
        'Utilizei tecnologias de contêineres, Docker, para padronizar e gerenciar ambientes consistentes entre desenvolvimento e produção.',
        'Reestruturei o pipeline de deploy de uma aplicação crítica na AWS, aprimorando a segurança, restringindo o acesso à VPN e melhorando a performance através de uma rede de distribuição de conteúdo (CDN).',
      ],
      techTags: ['python', 'aws', 'php', 'laravel', 'docker', 'ci/cd', 'sqs']
    }
  ];

  isEven(index: number): boolean {
    return (index % 2) !== 0;
  }
}
