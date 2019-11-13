import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { JobAddComponent } from "./_components/job-add/job-add.component";
import { JobEditComponent } from "./_components/job-edit/job-edit.component";
import { JobGetComponent } from "./_components/job-get/job-get.component";

import { HomeComponent } from "./_components/home/home.component";
import { RegisterComponent } from "./_components/register/register.component";
import { LoginComponent } from "./_components/login/login.component";
import { DashboardComponent } from "./_components/dashboard/dashboard.component";
import { ProfileComponent } from "./_components/profile/profile.component";

const routes: Routes = [
  {
    path: "jobs/create",
    component: JobAddComponent
  },
  {
    path: "jobs/edit/:id",
    component: JobEditComponent
  },
  {
    path: "jobs",
    component: JobGetComponent
  },
  { path: "deleteJobs", component: JobGetComponent },
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "profile", component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
