import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input('title') title: string;
  public toggleContentFlag: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleContent(): void {
    this.toggleContentFlag = !this.toggleContentFlag;
  }
}
