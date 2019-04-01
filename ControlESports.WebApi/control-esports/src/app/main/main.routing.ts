import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { BlogComponent } from './blog/blog.component';
import { MatchesComponent } from './matches/matches.component';
import { TimelineComponent } from './matches/timeline/timeline.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './account/register/register.component';
import { ForgotpasswordComponent } from './account/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './account/changepassword/changepassword.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';


export const MainRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/detail/:id', component: TeamDetailComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'blogs/detail/:id', component: BlogDetailComponent },
  { path: 'matches/timeline', component: TimelineComponent },
  { path: 'account/login', component: AccountComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'account/forgotpassword', component: ForgotpasswordComponent },
  { path: 'account/changepassword', component: ChangepasswordComponent }
];
