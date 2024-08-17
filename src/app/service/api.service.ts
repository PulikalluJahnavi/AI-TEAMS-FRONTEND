import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';  // Adjust this to your actual API base URL

  constructor(private http: HttpClient) { }

  // General headers for your API calls
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Fetch all teams
  getTeams(): Observable<any> {
    return this.http.get(`${this.apiUrl}/teams`, this.httpOptions);
  }

  // Fetch a single team by ID
  getTeamDetails(teamId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/teams/${teamId}`, this.httpOptions);
  }

  // Create a new team
  createTeam(teamData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/teams`, teamData, this.httpOptions);
  }

  // Update an existing team
  updateTeam(teamId: number, teamData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/teams/${teamId}`, teamData, this.httpOptions);
  }

  // Delete a team
  deleteTeam(teamId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/teams/${teamId}`, this.httpOptions);
  }

  // Fetch all agents
  getAgents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/agents`, this.httpOptions);
  }

  // Fetch a single agent by ID
  getAgentDetails(agentId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/agents/${agentId}`, this.httpOptions);
  }

  // Create a new agent
  createAgent(agentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/agents`, agentData, this.httpOptions);
  }

  // Update an existing agent
  updateAgent(agentId: number, agentData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/agents/${agentId}`, agentData, this.httpOptions);
  }

  // Delete an agent
  deleteAgent(agentId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/agents/${agentId}`, this.httpOptions);
  }
}