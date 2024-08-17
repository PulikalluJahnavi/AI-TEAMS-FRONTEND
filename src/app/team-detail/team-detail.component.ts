import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss'],
  standalone: true,
  imports: [FormsModule]  // Include FormsModule here for standalone component
})
export class TeamDetailComponent implements OnInit {
  team: any = {};  // Initialize with default values for safe binding

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const teamId = params.get('id');
      if (teamId) {
        this.apiService.getTeamDetails(Number(teamId)).subscribe(
          data => this.team = data,
          error => {
            console.error('Failed to get team details', error);
            alert('Error fetching team details');
          }
        );
      } else {
        alert('Team ID is required');
        this.router.navigate(['/dashboard/teams']);
      }
    });
  }

  onSubmit(): void {
    const teamId = this.route.snapshot.paramMap.get('id');
    if (teamId) {
      this.apiService.updateTeam(Number(teamId), this.team).subscribe(
        () => this.router.navigate(['/dashboard/teams']),
        error => {
          console.error('Error updating team', error);
          alert('Failed to update team');
        }
      );
    }
  }

  deleteTeam(): void {
    const teamId = this.route.snapshot.paramMap.get('id');
    if (teamId) {
      this.apiService.deleteTeam(Number(teamId)).subscribe(
        () => {
          alert('Team successfully deleted');
          this.router.navigate(['/dashboard/teams']);
        },
        error => {
          console.error('Error deleting team', error);
          alert('Failed to delete team');
        }
      );
    }
  }
}
