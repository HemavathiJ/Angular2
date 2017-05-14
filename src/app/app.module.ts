import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';

import { AutoGrow } from './auto-grow.component';
import { StarComponent } from './star/star.component';
import { LikebuttonComponent } from './likebutton/likebutton.component';
import { VotingComponentComponent } from './voting-component/voting-component.component';
import { TwitterComponentComponent } from './twitter-component/twitter-component.component';
import { TwitterService } from './twitter-component/twitter-component.service';
import { SummaryPipe } from './summary.pipe';
import { PanelComponent } from './panel/panel.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FormComponent } from './form/form.component';
import { SignUpFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    AutoGrow,
    StarComponent,
    LikebuttonComponent,
    VotingComponentComponent,
    TwitterComponentComponent,
    SummaryPipe,
    PanelComponent,
    AccordionComponent,
    FormComponent,
    SignUpFormComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
