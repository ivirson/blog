import { environment } from './../environments/environment';
import { InternationalizationService } from './services/internationalization/internationalization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blog';

  constructor(public internationalizationService: InternationalizationService) {}

  ngOnInit() {
    this.internationalizationService.setDefaultLanguage(environment.defaultLang);
  }
}
