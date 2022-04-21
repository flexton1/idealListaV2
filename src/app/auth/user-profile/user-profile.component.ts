import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name: string;

  constructor(private activatedRoute: ActivatedRoute,
      private authService: AuthService) {

    this.name = this.authService.getUserName();

  }

  ngOnInit() {


  }

}
