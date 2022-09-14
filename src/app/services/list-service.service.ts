import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from 'ngx-audio-player';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

private getUrl: string = 'https://ideallista-v2-spring.herokuapp.com/api/files/files';


  constructor(private _httpClient: HttpClient) { }

getSongs(): Observable<Track[]>{
  return this._httpClient.get<Track[]>(this.getUrl);
}

}
