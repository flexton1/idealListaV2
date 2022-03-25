import { Component, OnInit } from '@angular/core';
import { ListServiceService } from 'src/app/services/list-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  List: any[] = [];



  constructor(private listService: ListServiceService) { }

  ngOnInit(): void {
  }

}
