import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

import {
  AngularFire,
  FirebaseListObservable,
  FirebaseObjectObservable,
  FirebaseAuthState
} from 'angularfire2';

import { Idea } from './idea';
import { Vote } from './vote';

const
  IDEAS_PATH = '/ideas',
  VOTES_PATH = '/votes';

@Injectable()
export class VoteDatabaseService {
  private ideas: FirebaseListObservable<Array<Idea>>;
  private votes: FirebaseObjectObservable<Array<Vote>>;
  private voteSubject: Subject<string>;

  constructor(
    private firebase: AngularFire
  ) {
    this.initIdeas();
  }

  public getIdeas() : FirebaseListObservable<Idea[]> {
    return this.ideas;
  }

  public addIdea(idea: Idea) : void {
    this.ideas.push(idea);
  }

  public fetchVotesForIdea(name:string, countHandler: Observable<number>) : void {
    // this.votes.eq
    // let foo: Observable<number> = new Observable<number>();

    // this.voteSubject.next(name);
    // this.votes.elementAt(0).do(
    //   (x:Vote) => foo.n,
    //   (e:any)=>{
    //     console.debug(`Didn't retrieve value for ${name} - reason ${e}`);
    //     countHandler(0);
    // });
  }

  private initIdeas(): void {
    this.ideas = <FirebaseListObservable<Array<Idea>>> this.firebase.database.list(IDEAS_PATH);
  }

  private initVotes() : void {
    this.votes = <FirebaseObjectObservable<Array<Vote>>> this.firebase.database.object(VOTES_PATH);
  }
}
