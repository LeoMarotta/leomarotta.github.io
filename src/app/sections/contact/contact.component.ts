import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; // <-- IMPORTAR
import { MatIconModule } from '@angular/material/icon';   // <-- IMPORTAR

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule], // <-- ADICIONAR
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
