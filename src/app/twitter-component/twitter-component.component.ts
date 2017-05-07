import { Component, OnInit } from '@angular/core';
import { TwitterService } from './twitter-component.service';

@Component({
  selector: 'app-twitter-component',
  templateUrl: './twitter-component.component.html',
  styleUrls: ['./twitter-component.component.css']
})
export class TwitterComponentComponent implements OnInit {
  tweet: any;
  tweetsArray:any;

  constructor(private twitterService: TwitterService) { 
    // Assume like button data from service call 
    this.tweet = {
        liked: true,
        totalLikes: 10
    }

    this.tweetsArray = this.twitterService.getTweets();
    console.log(this.tweetsArray);
    
  }

  ngOnInit() {
      
  }

}
