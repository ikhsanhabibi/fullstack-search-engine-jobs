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
import { JobSearchComponent } from "./job-search/job-search.component";

@NgModule({
  declarations: [
    AppComponent,
    JobAddComponent,
    JobGetComponent,
    JobEditComponent,
    JobSearchComponent
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
export class AppModule {}
