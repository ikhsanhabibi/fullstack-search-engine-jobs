import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/_services/user.service";
import { AuthService } from "src/app/_services/auth.service";
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

  constructor(
    private fb: FormBuilder,
    private ps: UserService,
    private authService: AuthService
  ) {
    this.angForm = new FormGroup({
      name: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  register(name, username, email, password) {
    //this.ps.register(Name, Username, Email, Password);

    //this.ps.submitRegister(this.angForm.value);
    console.log(name, username, email, password);
    this.authService.register(name, username, email, password);

    this.angForm.reset();
  }

  ngOnInit(): void {}
}
