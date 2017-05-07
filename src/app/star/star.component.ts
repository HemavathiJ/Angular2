import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  // emptyStar: boolean = true;
  @Input() emptyStar = true;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.emptyStar = !this.emptyStar;
    this.change.emit({newValue: this.emptyStar});
  }
}