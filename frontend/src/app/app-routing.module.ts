import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { JobAddComponent } from "./_components/job-add/job-add.component";
import { JobEditComponent } from "./_components/job-edit/job-edit.component";
import { JobGetComponent } from "./_components/job-get/job-get.component";

const routes: Routes = [
  {
    path: "job/create",
    component: JobAddComponent
  },
  {
    path: "edit/:id",
    component: JobEditComponent
  },
  {
    path: "jobs",
    component: JobGetComponent
  },
  { path: "deleteJobs", component: JobGetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
