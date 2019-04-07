import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CitiesComponent} from './components/cities/cities.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchbyidComponent} from './searchbyid/searchbyid.component';



const routes: Route[] = [
  {path: '', component: DashboardComponent},
  //Hogyan tudunk objectet átadni e helyett v. query param helyett?
  //{path: 'cities/:name/:country/:temp/:icon', component: CitiesComponent},
  {path: 'searchbyid/:id', component: SearchbyidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
