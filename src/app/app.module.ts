import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodocardComponent } from './shared/component/todocard/todocard.component';
import { ScrolltopDirective } from './shared/directive/scrolltop.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodocardComponent,
    ScrolltopDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
