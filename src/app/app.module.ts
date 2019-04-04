import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KegPipe } from './keg.pipe';

import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { KegEditComponent } from './keg-edit/keg-edit.component';
import { KegNewComponent } from './keg-new/keg-new.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { BrewmarketComponent } from './brewmarket/brewmarket.component';
import { BrewDetailComponent } from './brew-detail/brew-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    KegEditComponent,
    KegNewComponent,
    KegPipe,
    WelcomeComponent,
    AboutComponent,
    BrewmarketComponent,
    BrewDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
