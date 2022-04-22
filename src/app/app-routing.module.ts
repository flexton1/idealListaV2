import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { BeginPageComponent } from './components/begin-page/begin-page.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
{path:'sign-up', component: SignupComponent},
{path: 'login', component: LoginComponent},
{path: '', component: BeginPageComponent},
{path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
{path: 'audio/:playlist', component: AudioPlayerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
