import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { MiamiComponent } from './miami/miami.component';
import { BarcelonaComponent } from './barcelona/barcelona.component';
import { LondonComponent } from './london/london.component';
import { BudapestComponent } from './budapest/budapest.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    MiamiComponent,
    BarcelonaComponent,
    LondonComponent,
    BudapestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
