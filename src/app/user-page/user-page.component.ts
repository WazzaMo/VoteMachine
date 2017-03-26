import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

import { FirebaseListObservable } from 'angularfire2';

import { Idea } from '../idea';
import { VoteDatabaseService } from '../vote-database.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  nextIdeaName: string;
  nextIdeaDescription: string;
  
  constructor(
    private authenticationService: AuthenticationService,
    private database: VoteDatabaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getName() : string {
    return this.authenticationService.getName();
  }

  private logout() : void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  private getIdeas() : FirebaseListObservable<Idea[]> {
    return this.database.getIdeas();
  }

  // private getVoteCountFor(name: string) : Observable<number> {

  // }

  private addIdea() : void {
    if (this.nextIdeaName && this.nextIdeaDescription) {
      this.database.addIdea({name: this.nextIdeaName, description: this.nextIdeaDescription});
    }
  }
}
