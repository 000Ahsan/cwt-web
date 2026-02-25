import { Component, inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { NavService } from '../../../services/nav/nav.service';

interface selectedLanguage {
  language?: string;
  code: string;
  type?: string;
  icon?: string;
}

@Component({
  selector: 'app-languages',
  templateUrl: './languages.html',
  styleUrls: ['./languages.scss'],
  imports: [],
  providers: [TranslateService],
})
export class Languages {
  navServices = inject(NavService);
  private translate = inject(TranslateService);

  public language: boolean = false;

  public languages = [
    {
      language: 'English',
      code: 'en',
      type: 'US',
      icon: 'us',
    },
    {
      language: 'Español',
      code: 'es',
      icon: 'es',
    },
    {
      language: 'Français',
      code: 'fr',
      icon: 'fr',
    },
    {
      language: 'Português',
      code: 'pt',
      type: 'BR',
      icon: 'pt',
    },
  ];

  public selectedLanguage: selectedLanguage = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us',
  };

  constructor() {
    this.changeLanguage(this.selectedLanguage);
  }

  changeLanguage(lang: selectedLanguage) {
    this.translate.use(lang.code);
    this.selectedLanguage = lang;
  }
}
