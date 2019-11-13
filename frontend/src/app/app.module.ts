import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { JobAddComponent } from "./_components/job-add/job-add.component";
import { JobGetComponent } from "./_components/job-get/job-get.component";
import { JobEditComponent } from "./_components/job-edit/job-edit.component";

import { SlimLoadingBarModule } from "ng2-slim-loading-bar";

import { HttpClientModule } from "@angular/common/http";

import { JobsService } from "./_services/jobs.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { FilterPipe } from "./_pipe/job.search.pipe";

import { JwPaginationComponent } from "jw-angular-pagination";

import { HomeComponent } from "./_components/home/home.component";
import { RegisterComponent } from "./_components/register/register.component";
import { LoginComponent } from "./_components/login/login.component";
import { DashboardComponent } from "./_components/dashboard/dashboard.component";
import { ProfileComponent } from "./_components/profile/profile.component";
import { NavbarComponent } from "./_components/navbar/navbar.component";

import { AlertService } from "./_services/alert.service";
import { UserService } from "./_services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    JobAddComponent,
    JobGetComponent,
    JobEditComponent,
    FilterPipe,
    JwPaginationComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [JobsService, AlertService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
