import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailApiUrl = 'https://your-backend-api.com/send-email';

  constructor(private http: HttpClient) { }
  sendEmail(name: string, mobile: string): Observable<any> {
    const emailData = {
      name: name,
      mobile: mobile
    };

    return this.http.post(this.emailApiUrl, emailData);
  }
}
