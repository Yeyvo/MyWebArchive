import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) {
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.baseURL}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${environment.baseURL}/files`);
  }


  serverUrl: string = "";

  public sendFormData(formData, filename) {
    return this.http.post<any>(`http://localhost:3000/api/projects/upload?filename=${filename}`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  sendFile(file, filename) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.sendFormData(formData, filename).subscribe((event: any) => {
      if (typeof (event) === 'object') {
        console.log(event.body);
      }
    });
  }

}
