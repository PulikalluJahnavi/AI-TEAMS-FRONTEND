import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'api.service.ts';

@Component({
  selector: 'app-team-creation',
  templateUrl: './team-creation.component.html',
})
export class TeamCreationComponent implements OnInit {
  team = { name: '', description: '' };
  agents = [];
  selectedAgents = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getAgents().subscribe((data: any) => {
      this.agents = data;
    });
  }

  onSubmit() {
    const newTeam = {
      ...this.team,
      agents: this.selectedAgents
    };

    this.apiService.createTeam(newTeam).subscribe(
      (response) => {
        this.router.navigate(['/dashboard/teams']);
      },
      (error) => {
        alert('Failed to create team');
      }
    );
  }
}