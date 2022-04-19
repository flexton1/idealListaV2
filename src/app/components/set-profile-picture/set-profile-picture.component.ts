import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { FileUploadService } from 'src/app/services/upload-file/file-upload.service';

@Component({
  selector: 'app-set-profile-picture',
  templateUrl: './set-profile-picture.component.html',
  styleUrls: ['./set-profile-picture.component.scss']
})
export class SetProfilePictureComponent implements OnInit {

  @ViewChild("fileUpload", {static: false}) picUpload: ElementRef;
  files: any[]  = [];  
    fileName: any;
    addToPlaylist: string = "";
    username: string;
  
    constructor(private fileUploadService: FileUploadService,
      private activatedRoute: ActivatedRoute,
      private authService: AuthService) { 
     this.username = authService.getUserName();
    }

  ngOnInit(){
  }

  onClick() {  
    const fileUpload = this.picUpload.nativeElement;
    fileUpload.onchange = () => {  
    for (let index = 0; index < fileUpload.files.length; index++)  
    {  
     const file = fileUpload.files[index];  
      this.fileName = file.name;
     
     this.files.push({ data: file, inProgress: false, progress: 0});  
    }  
      this.uploadFiles();  
    };  
    fileUpload.click();  
}



private uploadFiles() {  
  this.picUpload.nativeElement.value = '';  
  this.files.forEach(file => {  
    this.uploadFile(file);
    
  })
  this.files = [];
  
  ;  
}
uploadFile(file: any) {  
  const formData = new FormData();  
  formData.append('file', file.data);  
  file.inProgress = true;  
  this.fileUploadService.uploadPicture(formData, this.username).subscribe(
    rsp => {
      console.log(rsp.type)


     
},
    error => {
      console.log(error)
    });

}

}
