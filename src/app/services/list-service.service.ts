import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from 'ngx-audio-player';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

private getUrl: string = 'http://localhost:8080/api/files/files';


  constructor(private _httpClient: HttpClient) { }

getSongs(): Observable<Track[]>{
  return this._httpClient.get<Track[]>(this.getUrl);
}

}
