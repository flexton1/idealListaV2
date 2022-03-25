import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BeginPageComponent } from './components/begin-page/begin-page.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchResultComponent } from './components/search-page/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupComponent,
    LoginComponent,
    BeginPageComponent,
    AudioPlayerComponent,
    SearchPageComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
