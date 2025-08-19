import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:3000/students'; // Replace with your backend API

  constructor(private http: HttpClient) { }

  registerStudent(studentData: any): Observable<any> {
    return this.http.post(this.apiUrl, studentData);
  }
}
