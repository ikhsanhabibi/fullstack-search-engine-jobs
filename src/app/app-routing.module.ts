import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { JobAddComponent } from "./job-add/job-add.component";
import { JobEditComponent } from "./job-edit/job-edit.component";
import { JobGetComponent } from "./job-get/job-get.component";
import { JobSearchComponent } from './job-search/job-search.component';

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
  { path: "deleteAll", component: JobGetComponent },
  {
    path: "job/search",
    component: JobSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
