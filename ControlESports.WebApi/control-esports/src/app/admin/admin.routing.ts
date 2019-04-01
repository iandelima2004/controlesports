import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { UsersComponent } from './users/users.component';
import { DetailComponent as UserDetailComponent } from './users/detail/detail.component';
import { CreateComponent as UserCreateComponent } from './users/create/create.component';
import { EditComponent as UserEditComponent } from './users/edit/edit.component';

import { AchievementsComponent } from './achievements/achievements.component';
import { DetailComponent as AchievementsDetailComponent } from './achievements/detail/detail.component';
import { CreateComponent as AchievementsCreateComponent } from './achievements/create/create.component';
import { EditComponent as AchievementsEditComponent } from './achievements/edit/edit.component';

import { BlogsComponent } from './blogs/blogs.component';
import { DetailComponent as BlogsDetailComponent } from './blogs/detail/detail.component';
import { CreateComponent as BlogsCreateComponent } from './blogs/create/create.component';
import { EditComponent as BlogsEditComponent } from './blogs/edit/edit.component';

import { GamesComponent } from './games/games.component';
import { DetailComponent as GamesDetailComponent } from './games/detail/detail.component';
import { CreateComponent as GamesCreateComponent } from './games/create/create.component';
import { EditComponent as GamesEditComponent } from './games/edit/edit.component';

import { PlayersComponent } from './players/players.component';
import { DetailComponent as PlayersDetailComponent } from './players/detail/detail.component';
import { CreateComponent as PlayersCreateComponent } from './players/create/create.component';
import { EditComponent as PlayersEditComponent } from './players/edit/edit.component';

import { TeamsComponent } from './teams/teams.component';
import { DetailComponent as TeamsDetailComponent } from './teams/detail/detail.component';
import { CreateComponent as TeamsCreateComponent } from './teams/create/create.component';
import { EditComponent as TeamsEditComponent } from './teams/edit/edit.component';

import { TournamentsComponent } from './tournaments/tournaments.component';

export const AdminRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/detail/:id', component: UserDetailComponent },
  { path: 'users/edit/:id', component: UserEditComponent },

  { path: 'achievements', component: AchievementsComponent },
  { path: 'achievements/create', component: AchievementsCreateComponent },
  { path: 'achievements/detail/:id', component: AchievementsDetailComponent },
  { path: 'achievements/edit/:id', component: AchievementsEditComponent },

  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/create', component: BlogsCreateComponent },
  { path: 'blogs/detail/:id', component: BlogsDetailComponent },
  { path: 'blogs/edit/:id', component: BlogsEditComponent },

  { path: 'games', component: GamesComponent },
  { path: 'games/create', component: GamesCreateComponent },
  { path: 'games/detail/:id', component: GamesDetailComponent },
  { path: 'games/edit/:id', component: GamesEditComponent },

  { path: 'players', component: PlayersComponent },
  { path: 'players/create', component: PlayersCreateComponent },
  { path: 'players/detail/:id', component: PlayersDetailComponent },
  { path: 'players/edit/:id', component: PlayersEditComponent },

  { path: 'teams', component: TeamsComponent },
  { path: 'teams/create', component: TeamsCreateComponent },
  { path: 'teams/detail/:id', component: TeamsDetailComponent },
  { path: 'teams/edit/:id', component: TeamsEditComponent },
  
  { path: 'tournaments', component: TournamentsComponent }
];
