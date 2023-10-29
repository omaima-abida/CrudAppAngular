import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { ListscategoriesComponent } from './listscategories/listscategories.component';

const routes: Routes = [
  { path: "categories", component: ListcategoriesComponent },
  { path: "scategories", component: ListscategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatscategRoutingModule { }
