import { Router } from '@angular/router';
import { AuthUser } from './../../models/auth-user.model';
import { LoginService } from './../../services/login/login.service';
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
  public user: AuthUser;

  constructor(
    private internationalizationService: InternationalizationService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUser();
  }

  public changeLanguage(lang: string) {
    this.internationalizationService.setDefaultLanguage(lang);
    this.defaultLang = lang;
  }

  public getUser() {
    this.loginService.getUser().subscribe(
      (res: AuthUser) => {
        console.log(res);
        this.user = res;
      }
    );
  }

  public handleRedirect(route: string) {
    switch (route) {
      case 'login':
        this.router.navigate(['login']);
        break;
      case 'profile':
        this.router.navigate(['login']);
        break;
      case 'admin':
        this.router.navigate(['admin']);
        break;
    }
  }

}
