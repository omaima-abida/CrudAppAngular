import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListproduitsComponent } from './listproduits/listproduits.component';
import { CreateproduitsComponent } from './createproduits/createproduits.component';
import { UpdateproduitsComponent } from './updateproduits/updateproduits.component';
import { ShowproduitsComponent } from './showproduits/showproduits.component';

const routes: Routes = [
  { path: "products", component: ListproduitsComponent },
  { path: "products/create", component: CreateproduitsComponent },
  { path: "products/:id", component: UpdateproduitsComponent },
  { path: "products/show/:id", component: ShowproduitsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
