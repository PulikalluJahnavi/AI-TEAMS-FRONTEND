import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule], // Import RouterModule to use routerLink and router-outlet
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] // Corrected styleUrls
})
export class DashboardComponent {

}
