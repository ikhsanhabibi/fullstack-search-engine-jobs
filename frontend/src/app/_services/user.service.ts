import { Injectable, ErrorHandler } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  uri = "http://localhost:4000/users";
  successMessage: String = "";

  constructor(private http: HttpClient) {}

  register(Name, Username, Email, Password) {
    const obj = {
      Name,
      Username,
      Email,
      Password
    };

    console.log("service register");

    this.http
      .post(`${this.uri}/register`, obj)
      .subscribe(res => console.log("Succesfully registered"));
  }

  submitRegister(body: any) {
    console.log("body");
    console.log(body);

    let headers = {
      "Content-Type": "application/json"
    };

    let options = {
      headers: headers
    };

    console.log(JSON.stringify(body));
    this.http
      .post(`${this.uri}/register`, JSON.stringify(body), options)
      .subscribe(res => console.log("Succesfully added"));
  }
}
