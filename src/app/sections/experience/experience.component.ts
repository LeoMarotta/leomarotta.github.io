import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos que este componente usa: Card e agora Icon
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; // <-- 1. IMPORTAR AQUI

@Component({
  selector: 'app-experience',
  standalone: true,
  // Adicionar o MatIconModule na lista de imports
  imports: [CommonModule, MatCardModule, MatIconModule], // <-- 2. ADICIONAR AQUI
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

}
