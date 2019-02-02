import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent} from 'src/app/catalog/catalog.component';
import { DetailsComponent } from 'src/app/catalog/details/details.component';

const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  { path: 'details', component: DetailsComponent},
  { path:'', component: CatalogComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
