import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class JobsService {
  uri = "http://localhost:4000/jobs";

  constructor(private http: HttpClient) {}

  addJob(Title, Company, City) {
    const obj = {
      Title,
      Company,
      City
    };
    console.log(obj);
    this.http
      .post(`${this.uri}/add`, obj)
      .subscribe(res => console.log("Done"));
  }

  getJobs() {
    return this.http.get(`${this.uri}`);
  }

  deleteJob(id) {
    console.log("delete coy");
    return this.http.get(`${this.uri}/delete/${id}`);
  }

  deleteJobs() {
    console.log("deleteJobs() method excuted");
    return this.http.get(`${this.uri}/deleteAll`);
  }
}
