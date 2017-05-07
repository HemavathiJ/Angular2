import { Injectable } from '@angular/core';
import { TWEETS } from './twitter-component.mock.data';

@Injectable()
export class TwitterService {
    getTweets(): any {
        return TWEETS;
    }
}