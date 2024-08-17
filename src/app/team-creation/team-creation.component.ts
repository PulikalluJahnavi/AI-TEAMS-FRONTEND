import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-team-creation',
  templateUrl: './team-creation.component.html',
  standalone: true,
  imports: [FormsModule], // Ensure FormsModule is imported for ngModel binding
})
export class TeamCreationComponent implements OnInit {
  team = { name: '', description: '' };  // Holds the data for the new team
  agents: any[] = [];  // Holds the list of available agents
  selectedAgents: number[] = [];  // Holds the IDs of selected agents

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    // Fetch the list of agents from the API when the component initializes
    this.apiService.getAgents().subscribe((data: any) => {
      this.agents = data;
    });
  }

  onSubmit(): void {
    // Prepare the new team data including the selected agents
    const newTeam = {
      ...this.team,
      agents: this.selectedAgents
    };

    // Call the API to create the new team
    this.apiService.createTeam(newTeam).subscribe(
      () => {
        // On success, navigate back to the teams list
        this.router.navigate(['/dashboard/teams']);
      },
      (error) => {
        // Handle the error case
        console.error('Failed to create team:', error);
        alert('Failed to create team');
      }
    );
  }
}
