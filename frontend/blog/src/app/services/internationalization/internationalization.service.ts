import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class InternationalizationService {

  constructor(private translate: TranslateService) { }

  public setDefaultLanguage(lang: string) {
    const languages = ['pt-br', 'en-us'];
    if (languages.find(x => x === lang)) {
      this.translate.use(lang);
    } else {
      this.translate.use(environment.defaultLang);
    }
  }
}
