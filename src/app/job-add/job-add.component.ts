import { Component, OnInit } from "@angular/core";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { JobsService } from "../jobs.service";

@Component({
  selector: "app-job-add",
  templateUrl: "./job-add.component.html",
  styleUrls: ["./job-add.component.css"]
})
export class JobAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: JobsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Title: ["", Validators.required],
      Company: ["", Validators.required],
      City: ["", Validators.required],
      Country: ["", Validators.required],
      Internship: ["", Validators.required],
      Fulltime: ["", Validators.required],
      Parttime: ["", Validators.required],
      Summary: ["", Validators.required],
      Email: ["", Validators.required],
      Website: ["", Validators.required],
      Source: ["", Validators.required],
      PostedDate: ["", Validators.required],
      ScrapeDate: ["", Validators.required]
    });
  }

  addJob(
    Title,
    Company,
    City,
    Country,
    Internship,
    Fulltime,
    Parttime,
    Summary,
    Email,
    Website,
    Source,
    PostedDate,
    ScrapeDate
  ) {
    this.ps.addJob(
      Title,
      Company,
      City,
      Country,
      Internship,
      Fulltime,
      Parttime,
      Summary,
      Email,
      Website,
      Source,
      PostedDate,
      ScrapeDate
    );
  }

  ngOnInit() {}
}
