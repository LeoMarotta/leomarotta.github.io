import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  constructor(public languageService: LanguageService) {}

  get languages() {
    return [
      { nameKey: 'lang.portuguese', levelKey: 'level.native', flag: '🇧🇷' },
      { nameKey: 'lang.english', levelKey: 'level.fluent', flag: '🇺🇸' },
      { nameKey: 'lang.spanish', levelKey: 'level.basic', flag: '🇪🇸' },
      { nameKey: 'lang.french', levelKey: 'level.basic', flag: '🇫🇷' }
    ];
  }
}