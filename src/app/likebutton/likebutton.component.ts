import { Component, OnInit, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-likebutton',
  templateUrl: './likebutton.component.html',
  // styleUrls: ['./likebutton.component.css']
  styles: [
    `
    .glyphicon-heart {
        color: #ccc;
        cursor:pointer;
    }

    .highligthed {
      color:deeppink;
    }
    `
  ]
})
export class LikebuttonComponent implements OnInit {
  @Input() liked: boolean = false;
  @Input() totalLikes: number = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleSelection() {
    this.liked = !this.liked;
    //increment / decrement counter based on like
    this.totalLikes += this.liked ?  1 : - 1;
  }
}
