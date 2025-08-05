import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; // <-- IMPORTAR AQUI

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule], // <-- ADICIONAR AQUI
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

}
