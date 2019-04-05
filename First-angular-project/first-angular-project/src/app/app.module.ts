import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { FormsModule} from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { CitiesComponent } from './components/cities/cities.component';
import { SearchbyidComponent } from './searchbyid/searchbyid.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
     SearchComponent,
     CitiesComponent,
     SearchbyidComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
