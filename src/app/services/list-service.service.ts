import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../model/song';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

private getUrl: string = 'https://www.ideallista.net/playlist/js/';


  constructor(private _httpClient: HttpClient) { }



}
