import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../model/song';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

private getUrl: string = 'https://www.ideallista.net/playlist/js/';
private urlBypass: string = 'https://cors-anywhere.herokuapp.com/';

  constructor(private _httpClient: HttpClient) { }

getList(name: String): Observable<Song[]>{
  return this._httpClient.get<Song[]>(this.urlBypass + this.getUrl + name);
}

}
