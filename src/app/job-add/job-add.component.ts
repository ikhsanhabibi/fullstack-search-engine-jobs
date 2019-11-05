import { Component, OnInit } from "@angular/core";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { JobsService } from "../_services/jobs.service";

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
      City: ["", Validators.required]
    });
  }

  addJob(Title, Company, City) {
    console.log(Title, Company, City);
    this.ps.addJob(Title, Company, City);
    alert("Succesfully added.");
    this.angForm.reset();
  }

  ngOnInit() { }
}
