import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/model/login-request';
import { AuthenticationService } from 'src/app/services/Auth/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

loginRequest: LoginRequest = new LoginRequest; 
showValidationError: boolean = false;


  constructor(private _authService: AuthenticationService,
    private _router: Router) { }

  ngOnInit(): void {
  }


  onLoginSubmit(form: NgForm){
    if (form.invalid) {
      return (this.showValidationError = true);
    } else {
      this._authService.login(this.loginRequest).subscribe((data) => {
        console.log(data);
        this._router.navigate([this._router.url]);
      });
      this.showValidationError = false;
      form.reset();
      return this._router.navigate(['begin-page']);
    }
  }
  }

