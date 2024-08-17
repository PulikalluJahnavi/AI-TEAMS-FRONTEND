import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; // Adjust according to your API's URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap(response => this.setSession(response)), // Assuming the response from the backend includes a token
        catchError(this.handleError<AuthResponse>('login', { token: '' })) // Provide a default empty token in error case
      );
  }

  private setSession(authResult: AuthResponse) {
    localStorage.setItem('token', authResult.token); // Save the token to local storage
  }

  logout() {
    localStorage.removeItem('token'); // Remove the token from local storage
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Check if the token exists
  }

  getToken(): string | null {
    return localStorage.getItem('token'); // Retrieve the token
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`); // Log the error
      return of(result as T);
    };
  }
}
