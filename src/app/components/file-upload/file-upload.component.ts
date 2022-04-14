import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileUploadService } from 'src/app/services/upload-file/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  files: any[]  = [];  
    fileName: any;
    addToPlaylist: string = "";
 
    constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(){
  }

  onClick() {  
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {  
    for (let index = 0; index < fileUpload.files.length; index++)  
    {  
     const file = fileUpload.files[index];  
      this.fileName = file.name;
     
     this.files.push({ data: file, inProgress: false, progress: 0, playlist: this.addToPlaylist});  
    }  
      this.uploadFiles();  
    };  
    fileUpload.click();  
}

onKey(value: string){
  this.addToPlaylist = value;
}


private uploadFiles() {  
  this.fileUpload.nativeElement.value = '';  
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
  this.fileUploadService.upload(formData, file.playlist).subscribe(
    rsp => {
      console.log(rsp.type)


     
},
    error => {
      console.log(error)
    });

}
}
