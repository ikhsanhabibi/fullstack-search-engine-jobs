import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  uri = "http://localhost:4000/users";

  constructor(private http: HttpClient) {}

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
}
