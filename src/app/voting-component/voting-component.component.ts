import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voting-component',
  templateUrl: './voting-component.component.html',
  // styleUrls: ['./voting-component.component.css']
  styles: [`
    div.voterClass {
          width: 25px;
      }
      .glyphicon-menu-up, .glyphicon-menu-down {
          color: #777;
          cursor: pointer;
      }
      .voterCountClass {
          padding-left: 3px;
      }
      .highligthed {
          color:#e08413;
      }
  `]
})
export class VotingComponentComponent implements OnInit {
  @Input('totalVotes') totalVotes: number;
  @Input('myVote') myVote: number;
  constructor() { }

  ngOnInit() {
  }

  voteUp(): void {
    if(this.myVote == 1) { return;}
    this.myVote ++;
  }

  voteDown(): void {
    if(this.myVote == -1) { return;}
     --this.myVote;
    
  }
}
