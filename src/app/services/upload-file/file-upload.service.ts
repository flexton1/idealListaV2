import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private _httpClient: HttpClient) { }
  SERVER_URL: string = "http://localhost:8080/api/files/upload";


  public upload(formData: any, playlist: string) {
    console.log("upload service function is called")
    console.log(formData)
    return this._httpClient.post<FormData>(this.SERVER_URL + '/' + playlist, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  
  }
}
