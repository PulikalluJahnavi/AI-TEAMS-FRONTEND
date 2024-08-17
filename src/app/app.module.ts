import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Import components
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamCreationComponent } from './team-creation/team-creation.component';

// Import services
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
})
export class AppModule { }
