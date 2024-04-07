import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { AsyncpipeComponent } from './asyncpipe/asyncpipe.component';
import { AsyncpipewithpromiseComponent } from './asyncpipewithpromise/asyncpipewithpromise.component';

import { FilterPipe } from './customPipeFile/filter.pipe';
import{ HttpClientModule} from '@angular/common/http';
import { CustomfilterpieComponent } from './customfilterpie/customfilterpie.component'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    AsyncpipeComponent,
    AsyncpipewithpromiseComponent,
    FilterPipe,
    CustomfilterpieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
