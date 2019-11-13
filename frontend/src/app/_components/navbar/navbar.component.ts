import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/_services/user.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  constructor(private us: UserService, private router: Router) {}

  ngOnInit() {
    this.authListenerSubs = this.us
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  ngOnDestroy() {}

  logout() {
    this.us.logout();
  }
}
