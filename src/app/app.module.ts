import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';

import { AutoGrow } from './auto-grow.component';
import { StarComponent } from './star/star.component';
import { LikebuttonComponent } from './likebutton/likebutton.component';
import { VotingComponentComponent } from './voting-component/voting-component.component';
import { TwitterComponentComponent } from './twitter-component/twitter-component.component';
import { TwitterService } from './twitter-component/twitter-component.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    AutoGrow,
    StarComponent,
    LikebuttonComponent,
    VotingComponentComponent,
    TwitterComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
