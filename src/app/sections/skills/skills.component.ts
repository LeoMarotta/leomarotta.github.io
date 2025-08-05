import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips'; // <-- IMPORTAR AQUI

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatChipsModule], // <-- ADICIONAR AQUI
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

}
