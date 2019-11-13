import { Injectable, ErrorHandler } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  uri = "http://localhost:4000/users";

  private token: String;

  constructor(private http: HttpClient) {}

  getToken() {
    return this.token;
  }

  register(name, username, email, password) {
    const obj = {
      name,
      username,
      email,
      password
    };

    this.http
      .post(`${this.uri}/register`, obj)
      .subscribe(res => console.log("Succesfully registered"));
  }

  login(email, password) {
    const obj = {
      email,
      password
    };

    this.http
      .post<{ token: String }>(`${this.uri}/login`, obj)
      .subscribe(res => {
        const token = res.token;
        this.token = token;
        console.log(token);
      });
  }
}
