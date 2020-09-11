import { environment } from './../../../environments/environment';
import { InternationalizationService } from './../../services/internationalization/internationalization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public defaultLang = environment.defaultLang;

  constructor(public internationalizationService: InternationalizationService) { }

  ngOnInit() {
  }

  public changeLanguage(lang: string) {
    this.internationalizationService.setDefaultLanguage(lang);
    this.defaultLang = lang;
  }

}
