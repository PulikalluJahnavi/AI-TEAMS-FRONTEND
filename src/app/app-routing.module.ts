import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamCreationComponent } from './team-creation/team-creation.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
    { path: 'login', component: LoginComponent }, // Login route
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard], // Protect dashboard routes
        children: [ // Nested routes under dashboard
            { path: '', redirectTo: 'teams', pathMatch: 'full' },
            { path: 'teams', component: TeamsComponent },
            { path: 'team-detail/:id', component: TeamDetailComponent }, // :id is a placeholder for team id
            { path: 'team-creation', component: TeamCreationComponent }
        ]
    },
    { path: '**', redirectTo: '/login' } // Wildcard route for a 404 page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }