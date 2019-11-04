import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { JobAddComponent } from "./job-add/job-add.component";
import { JobGetComponent } from "./job-get/job-get.component";
import { JobEditComponent } from "./job-edit/job-edit.component";

import { SlimLoadingBarModule } from "ng2-slim-loading-bar";

import { HttpClientModule } from "@angular/common/http";

import { JobsService } from "./jobs.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { FilterPipe } from "./job.search.pipe";

import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    JobAddComponent,
    JobGetComponent,
    JobEditComponent,
    FilterPipe,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
