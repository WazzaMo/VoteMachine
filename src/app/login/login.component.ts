import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {

  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  ngDoCheck() {
    if(this.isSignedIn()) {
      console.log("going to /user");
      this.goToUserPage();
    }
  }

  public isSignedIn() : boolean {
    return this.authentication.isSignedIn();
  }

  private login() : void {
    this.authentication.login(this.goToUserPage);
  }

  public getName() : string {
    return this.authentication.getName();
  }

  public goToUserPage() : void {
    console.debug("Routing to user page");
    this.router.navigate(['/user']);
  }
}
