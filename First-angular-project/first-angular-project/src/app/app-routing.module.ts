import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import  { AppComponent} from './app.component';
import { CitiesComponent} from './components/cities/cities.component'



const routes: Route[] = [
  {path: '', component: AppComponent},
  {path: 'cities/:city', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
