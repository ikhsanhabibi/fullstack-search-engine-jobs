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
  jobsLength: number;
  constructor(private ps: JobsService) {}

  ngOnInit() {
    this.ps.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
      this.jobsLength = data.length;
      console.log(this.jobsLength);
    });
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
