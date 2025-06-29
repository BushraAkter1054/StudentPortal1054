import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegisterData {
  id?: number;       
  name: string;
  email: string;
  password: string;
  department?: string;
  gender?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/students';

  constructor(private http: HttpClient) {}

  registerUser(data: RegisterData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
