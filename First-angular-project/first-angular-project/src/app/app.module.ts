import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { FormsModule} from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { CitiesComponent } from './components/cities/cities.component';


@NgModule({
  declarations: [
    AppComponent,
     SearchComponent,
     CitiesComponent
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
