import { Injectable, ErrorHandler } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService {
  uri = "http://localhost:4000/users";

  private token: String;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) {}

  getIsAuth() {
    return this.isAuthenticated;
  }

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener;
  }

  register(name, username, email, password) {
    const obj = {
      name,
      username,
      email,
      password
    };

    this.http.post(`${this.uri}/register`, obj).subscribe(res => {
      console.log("Succesfully registered");
      this.router.navigate(["/login"]);
    });
  }

  login(email, password) {
    const obj = {
      email,
      password
    };

    this.http
      .post<{ token: String }>(`${this.uri}/login`, obj)
      .subscribe(res => {
        console.log(res);
        const token = res.token;
        this.token = token;
        this.authStatusListener.next(true);
        this.router.navigate(["/dashboard"]).then(() => {
          alert("Login succesful.");
        });
      });
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(["/"]).then(() => {
      alert("Log out.");
    });
  }
}
