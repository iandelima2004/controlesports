import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from "ngx-bootstrap";
import { FormsModule, FormBuilder } from '@angular/forms';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { QuillModule } from 'ngx-quill'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';


// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { AppRouter } from "./app.routing";
import { MainNavigatorComponent } from './components/main-navigator/main-navigator.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { HomeComponent } from './main/home/home.component';
import { MatchesComponent } from './main/matches/matches.component';
import { TeamsComponent } from './main/teams/teams.component';
import { BlogComponent } from './main/blog/blog.component';
import { TeamDetailComponent } from './main/teams/team-detail/team-detail.component';
import { TimelineComponent } from './main/matches/timeline/timeline.component';
import { AccountComponent } from './main/account/account.component';
import { RegisterComponent } from './main/account/register/register.component';
import { ForgotpasswordComponent } from './main/account/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './main/account/changepassword/changepassword.component';
import { BlogDetailComponent } from './main/blog/blog-detail/blog-detail.component';
import { SafeHtmlPipe } from './core/pipes/safe-html.pipe';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { TournamentsComponent } from './admin/tournaments/tournaments.component';
import { SettingsComponent } from './admin/settings/settings.component';

import { UsersComponent } from './admin/users/users.component';
import { DetailComponent as UserDetailComponent } from './admin/users/detail/detail.component';
import { CreateComponent as UserCreateComponent } from './admin/users/create/create.component';
import { EditComponent as UserEditComponent } from './admin/users/edit/edit.component';

import { AchievementsComponent } from './admin/achievements/achievements.component';
import { DetailComponent as AchievementsDetailComponent } from './admin/achievements/detail/detail.component';
import { CreateComponent as AchievementsCreateComponent } from './admin/achievements/create/create.component';
import { EditComponent as AchievementsEditComponent } from './admin/achievements/edit/edit.component';

import { BlogsComponent } from './admin/blogs/blogs.component';
import { DetailComponent as BlogsDetailComponent } from './admin/blogs/detail/detail.component';
import { CreateComponent as BlogsCreateComponent } from './admin/blogs/create/create.component';
import { EditComponent as BlogsEditComponent } from './admin/blogs/edit/edit.component';

import { GamesComponent } from './admin/games/games.component';
import { DetailComponent as GamesDetailComponent } from './admin/games/detail/detail.component';
import { CreateComponent as GamesCreateComponent } from './admin/games/create/create.component';
import { EditComponent as GamesEditComponent } from './admin/games/edit/edit.component';

import { PlayersComponent } from './admin/players/players.component';
import { DetailComponent as PlayersDetailComponent } from './admin/players/detail/detail.component';
import { CreateComponent as PlayersCreateComponent } from './admin/players/create/create.component';
import { EditComponent as PlayersEditComponent } from './admin/players/edit/edit.component';

import { TeamsComponent as TeamsAdminComponent } from './admin/teams/teams.component';
import { DetailComponent as TeamsDetailComponent } from './admin/teams/detail/detail.component';
import { CreateComponent as TeamsCreateComponent } from './admin/teams/create/create.component';
import { EditComponent as TeamsEditComponent } from './admin/teams/edit/edit.component';

import { MatchesComponent as MatchesAdminComponent } from './admin/matches/matches.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainNavigatorComponent,
    MainFooterComponent,
    HomeComponent,
    MatchesComponent,
    BlogComponent,
    TeamDetailComponent,
    TimelineComponent,
    AccountComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    BlogDetailComponent,
    SafeHtmlPipe,
    AdminComponent,
    DashboardComponent,
    AchievementsComponent,
    TournamentsComponent,
    SettingsComponent,
    UsersComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    AchievementsComponent,
    AchievementsDetailComponent,
    AchievementsCreateComponent,
    AchievementsEditComponent,
    BlogsComponent,
    BlogsDetailComponent,
    BlogsCreateComponent,
    BlogsEditComponent,
    GamesComponent,
    GamesDetailComponent,
    GamesCreateComponent,
    GamesEditComponent,
    PlayersComponent,
    PlayersDetailComponent,
    PlayersCreateComponent,
    PlayersEditComponent,
    TeamsComponent,
    TeamsAdminComponent,
    TeamsDetailComponent,
    TeamsCreateComponent,
    TeamsEditComponent,
    MatchesAdminComponent
  ],
  imports: [
    FormsModule,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    AppRouter,
    BrowserModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    QuillModule,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }

