import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { UserService } from "src/app/_services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  isLoading: Boolean = false;
  private authStatusSub: Subscription;

  constructor(private fb: FormBuilder, private us: UserService) {
    this.angForm = new FormGroup({
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

  ngOnInit() {
    this.authStatusSub = this.us
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
  }

  login(email, password) {
    if (this.angForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.us.login(email, password);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
