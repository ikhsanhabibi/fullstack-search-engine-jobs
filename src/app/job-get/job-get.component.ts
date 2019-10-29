import { Component, OnInit } from "@angular/core";
import { JobsService } from "../jobs.service";
import { Job } from "../Job";

@Component({
  selector: "app-job-get",
  templateUrl: "./job-get.component.html",
  styleUrls: ["./job-get.component.css"]
})
export class JobGetComponent implements OnInit {
  jobs: Job[];
  constructor(private ps: JobsService) {}

  ngOnInit() {
    this.ps.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
    });
  }

  deleteJob(id) {
    this.ps.deleteJob(id).subscribe(res => {
      this.jobs.splice(id, 1);
    });
  }

  deleteJobs() {
    this.ps.deleteJobs().subscribe(() => {
      this.jobs.splice(0, this.jobs.length);
    });
  }
}
