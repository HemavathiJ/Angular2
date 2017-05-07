import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  // styleUrls: ['./sample.component.css']
   providers: [SampleService]

})
export class SampleComponent implements OnInit {
  title: string = "A sample component";
  sampleTypes;

  constructor(sampleService: SampleService) {
    this.sampleTypes = sampleService.getSampleTypes();
  }
  
  ngOnInit() {
  }

}
