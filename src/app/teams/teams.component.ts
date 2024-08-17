import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngFor and other common directives
import { RouterModule } from '@angular/router'; // For using Router

interface Team {
  id: number;
  name: string;
  description: string;
  agents: Agent[];
}

interface Agent {
  name: string;
}

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, RouterModule], // Import CommonModule and RouterModule here
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'] // Corrected to styleUrls in an array format
})
export class TeamsComponent {
  teams: Team[] = [ // Example teams data
    {
      id: 1,
      name: 'Team Alpha',
      description: 'Description of Team Alpha',
      agents: [{ name: 'Agent Smith' }, { name: 'Agent Doe' }]
    },
    {
      id: 2,
      name: 'Team Beta',
      description: 'Description of Team Beta',
      agents: [{ name: 'Agent K' }, { name: 'Agent J' }]
    }
  ];

  viewDetails(teamId: number): void {
    console.log('View details for team ID:', teamId);
    // Here you might navigate using the router or other logic
  }
}
