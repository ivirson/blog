import { MatIconModule } from '@angular/material/icon';
import { LoginEffects } from './core/login/login.effects';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { environment } from './../environments/environment';
import { PostsEffects } from './core/posts/posts.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './core/posts/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { loginReducer } from './core/login/login.reducer';
import { authorsReducer } from './core/authors/authors.reducer';
import { AuthorsEffects } from './core/authors/authors.effects';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostComponent } from './components/post/post.component';
import { HighlightsPostsComponent } from './components/home/components/highlights-posts/highlights-posts.component';
import { HomeComponent } from './components/home/home.component';
import { MainPostComponent } from './components/home/components/main-post/main-post.component';
import { PostSidebarComponent } from './components/home/components/post-sidebar/post-sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { BloggerProfileComponent } from './components/home/components/blogger-profile/blogger-profile.component';
import { AdminComponent } from './components/admin/admin.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HighlightsPostsComponent,
    HomeComponent,
    MainPostComponent,
    PostSidebarComponent,
    LoginComponent,
    BloggerProfileComponent,
    PostComponent,
    AdminComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    }),
    StoreModule.forRoot({
      post: postsReducer,
      user: loginReducer,
      authors: authorsReducer
    }),
    EffectsModule.forRoot([
      PostsEffects,
      LoginEffects,
      AuthorsEffects
    ]),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
