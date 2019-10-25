import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class JobsService {
  uri = "http://localhost:4000/jobs";

  constructor(private http: HttpClient) {}

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
    const obj = {
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
    };
    console.log(obj);
    this.http
      .post(`${this.uri}/add`, obj)
      .subscribe(res => console.log("Done"));
  }

  getJobs() {
    return this.http.get(`${this.uri}`);
  }
}
