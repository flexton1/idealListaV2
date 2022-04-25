import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private _httpClient: HttpClient) { }
  SERVER_URL: string = "https://ideallista-v2-spring.herokuapp.com/api/files/upload";
  SERVER_URL_PICTURES: string = "https://ideallista-v2-spring.herokuapp.com/api/profileImages"

  public upload(formData: any, playlist: string) {
    console.log("upload service function is called")
    console.log(formData)
    return this._httpClient.post<FormData>(this.SERVER_URL + '/' + playlist, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  
  }

  public uploadPicture(formData: any, username: string) {
    console.log("upload service function is called")
    console.log(formData)
    return this._httpClient.post<FormData>(this.SERVER_URL_PICTURES + '/upload' + '/' + username, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  
  }


}
