import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KegPipe } from './keg.pipe';

import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { KegEditComponent } from './keg-edit/keg-edit.component';
import { KegNewComponent } from './keg-new/keg-new.component';


@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    KegEditComponent,
    KegNewComponent,
    KegPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
