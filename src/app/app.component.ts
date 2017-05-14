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

  //custom pipes object
  pipeObject = {
    title: "Angular 2 custom pipes ex",
    body:'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. ... While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever.'
  }
  constructor() { }

  onChange($event){
    console.log($event);
  }
}
