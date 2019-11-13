import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { JobsService } from "src/app/_services/jobs.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-job-edit",
  templateUrl: "./job-edit.component.html",
  styleUrls: ["./job-edit.component.css"]
})
export class JobEditComponent implements OnInit {
  angForm: FormGroup;
  job: any = {};

  constructor(
    private fb: FormBuilder,
    private ps: JobsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Title: ["", Validators.required],
      Company: ["", Validators.required],
      City: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.editJob(params["id"]).subscribe(res => {
        this.job = res;
        this.angForm.get("Title").setValue(this.job.Title);
        this.angForm.get("Company").setValue(this.job.Company);
        this.angForm.get("City").setValue(this.job.City);
      });
    });
  }

  updateJob(Title, Company, City, id) {
    this.route.params.subscribe(params => {
      this.ps.updateJob(Title, Company, City, params.id);

      this.router.navigate(["/jobs"]).then(() => {
        alert("Product succesfully updated.");
        window.location.reload();
      });
    });
  }
}
