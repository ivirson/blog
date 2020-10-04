import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BadgeComponent } from './badge/badge.component';
import { FooterPostComponent } from './footer/components/footer-post/footer-post.component';
import { TranslateModule } from '@ngx-translate/core';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { MatMenuModule } from '@angular/material';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule
];

const components = [
    HeaderComponent,
    FooterComponent,
    BadgeComponent,
    FooterPostComponent,
    MenuItemsComponent
  ];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    material,
    BrowserModule,
    CommonModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    components
  ]
})
export class SharedModule { }
