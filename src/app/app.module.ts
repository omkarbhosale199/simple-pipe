import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { AsyncpipeComponent } from './asyncpipe/asyncpipe.component';
import { AsyncpipewithpromiseComponent } from './asyncpipewithpromise/asyncpipewithpromise.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    AsyncpipeComponent,
    AsyncpipewithpromiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
