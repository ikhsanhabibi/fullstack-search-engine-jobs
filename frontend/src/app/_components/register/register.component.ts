import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/_services/user.service";
import { Router } from "@angular/router";

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  angForm: FormGroup;
  isLoading: Boolean = false;
  private authStatusSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private router: Router
  ) {
    this.angForm = new FormGroup({
      name: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  register(name, username, email, password) {
    this.isLoading = true;
    this.us.register(name, username, email, password);
  }

  ngOnInit() {
    this.authStatusSub = this.us
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
