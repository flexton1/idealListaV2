import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { BeginPageComponent } from './components/begin-page/begin-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
{path:'', component: AudioPlayerComponent},
{path: 'begin-page', component: BeginPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
