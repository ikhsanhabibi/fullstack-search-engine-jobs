import { Component, OnInit } from "@angular/core";
import { JobsService } from "../../_services/jobs.service";
import { Job } from "../../_models/Job";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-job-get",
  templateUrl: "./job-get.component.html",
  styleUrls: ["./job-get.component.css"]
})
export class JobGetComponent implements OnInit {
  jobs: Job[];
  jobsLength: number;

  // array of all items to be paged
  items: Job[];
  // current page of items
  pageOfItems: Array<any>;

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: JobsService) {
    this.createForm();
  }

  ngOnInit() {
    this.ps.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
      this.jobsLength = data.length;
      console.log(this.jobsLength);
      // items = jobs
      this.items = data;
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  deleteJob(id) {
    this.ps.deleteJob(id).subscribe(res => {
      this.jobs.splice(id, 1);
      this.ngOnInit();
      console.log("Deleted");
    });
  }

  deleteJobs() {
    this.ps.deleteJobs().subscribe(() => {
      this.jobs.splice(0, this.jobs.length);
      this.ngOnInit();
      console.log("All jobs deleted");
    });
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

  truncateText(summary, maxLength) {
    if (summary && summary.length > maxLength) {
      summary = summary.substr(0, maxLength) + "...";
    }
    return summary;
  }

  convertInternship(answer) {
    if (answer == "Yes") {
      return "Internship";
    }
  }

  convertFulltime(answer) {
    if (answer == "Yes") {
      return "Full time";
    }
  }

  convertParttime(answer) {
    if (answer == "Yes") {
      return "Part time";
    }
  }
}
