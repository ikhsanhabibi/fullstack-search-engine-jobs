import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/_services/user.service";
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

  constructor(private fb: FormBuilder, private ps: UserService) {
    this.angForm = new FormGroup({
      Name: new FormControl("", Validators.required),
      Username: new FormControl("", Validators.required),
      Email: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required)
    });
  }

  register(Name, Username, Email, Password) {
    //this.ps.register(Name, Username, Email, Password);

    this.ps.submitRegister(this.angForm.value);

    this.angForm.reset();
  }

  ngOnInit(): void {}
}
