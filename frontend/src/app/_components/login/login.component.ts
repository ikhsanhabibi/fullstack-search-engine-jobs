import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { UserService } from "src/app/_services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: UserService) {
    this.angForm = new FormGroup({
      Email: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  login() {
    console.log(this.angForm.value);
  }
}
