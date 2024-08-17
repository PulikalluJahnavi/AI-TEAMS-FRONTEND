import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
})
export class TeamDetailComponent implements OnInit {
  team = { name: '', description: '' };

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const teamId = this.route.snapshot.paramMap.get('id');
    this.apiService.getTeam(teamId).subscribe((data: any) => {
      this.team = data;
    });
  }

  onSubmit() {
    const teamId = this.route.snapshot.paramMap.get('id');
    this.apiService.updateTeam(teamId, this.team).subscribe(
      () => {
        this.router.navigate(['/dashboard/teams']);
      },
      (error) => {
        alert('Failed to update team');
      }
    );
  }

  deleteTeam() {
    const teamId = this.route.snapshot.paramMap.get('id');
    this.apiService.deleteTeam(teamId).subscribe(
      () => {
        this.router.navigate(['/dashboard/teams']);
      },
      (error) => {
        alert('Failed to delete team');
      }
    );
  }
}