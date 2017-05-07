import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'App works!!';
  // Assume like button data from service call 
  tweet = {
      liked: true,
      totalLikes: 10
  }

  // Assume like button data from service call 
  voter = {
      myVote: 1,
      totalVotes: 10
  }

  constructor() { }

  onChange($event){
    console.log($event);
  }
}
