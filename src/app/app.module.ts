import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeginPageComponent } from './components/begin-page/begin-page.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchResultComponent } from './components/search-page/search-result/search-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { TokenInterceptor } from './token-interceptor';
import { ToastrModule } from 'ngx-toastr';
import { SetProfilePictureComponent } from './components/set-profile-picture/set-profile-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    BeginPageComponent,
    AudioPlayerComponent,
    SearchPageComponent,
    SearchResultComponent,
    NavbarComponent,
    SidebarComponent,
    FileUploadComponent,
    UserProfileComponent,
    LoginComponent,
    SignupComponent,
    SetProfilePictureComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgxAudioPlayerModule,
    MatToolbarModule,
    MatSidenavModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    NgxWebstorageModule.forRoot(),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
