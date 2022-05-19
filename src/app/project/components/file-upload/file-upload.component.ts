import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {HttpClient, HttpEventType, HttpResponse} from "@angular/common/http";
import {FileUploadService} from "../../../services/file-upload.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Input()
  requiredFileType: string;

  fileName = '';
  uploadProgress: number;
  uploadSub: Subscription;

  constructor(private http: HttpClient, private fileuploadService: FileUploadService) {
  }

  // onFileSelected(event) {
  //   const file:File = event.target.files[0];
  //
  //   if (file) {
  //     this.fileName = file.name;
  //     const formData = new FormData();
  //     formData.append("thumbnail", file);
  //
  //     const upload$ = this.http.post("/api/thumbnail-upload", formData, {
  //       reportProgress: true,
  //       observe: 'events'
  //     })
  //       .pipe(
  //         finalize(() => this.reset())
  //       );
  //
  //     this.uploadSub = upload$.subscribe(event => {
  //       if (event.type == HttpEventType.UploadProgress) {
  //         this.uploadProgress = Math.round(100 * (event.loaded / event.total));
  //       }
  //     })
  //   }
  // }


  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;

  ngOnInit() {
    this.fileInfos = this.fileuploadService.getFiles();

  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
    this.upload();
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.fileuploadService.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.fileuploadService.getFiles();
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          });
      }

      this.selectedFiles = undefined;
    }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }


}
