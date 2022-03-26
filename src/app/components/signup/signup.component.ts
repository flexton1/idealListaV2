import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupRequest } from 'src/app/model/signup-request';
import { AuthenticationService } from 'src/app/services/Auth/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpRequest: SignupRequest = new SignupRequest();
  showValidationError: boolean = false;
  constructor(
    private _router: Router,
    private _authService: AuthenticationService
  ) {}

  ngOnInit() {}

  onSignupSubmit(form: NgForm) {
    if (form.invalid) {
      return (this.showValidationError = true);
    } else {
      this._authService.signup(this.signUpRequest).subscribe((data) => {
        console.log(data);
        this._router.navigate([this._router.url]);
      });
      this.showValidationError = false;
      form.reset();
      return window.location.reload();
    }
  }
}
