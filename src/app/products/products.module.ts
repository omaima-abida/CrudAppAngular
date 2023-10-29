import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListproduitsComponent } from './listproduits/listproduits.component';
import { CreateproduitsComponent } from './createproduits/createproduits.component';
import { UpdateproduitsComponent } from './updateproduits/updateproduits.component';
import { ShowproduitsComponent } from './showproduits/showproduits.component';


@NgModule({
  declarations: [
    ListproduitsComponent,
    CreateproduitsComponent,
    UpdateproduitsComponent,
    ShowproduitsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
