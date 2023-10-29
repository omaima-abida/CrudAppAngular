import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatscategRoutingModule } from './catscateg-routing.module';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { ListscategoriesComponent } from './listscategories/listscategories.component';


@NgModule({
  declarations: [
    ListcategoriesComponent,
    ListscategoriesComponent
  ],
  imports: [
    CommonModule,
    CatscategRoutingModule
  ]
})
export class CatscategModule { }
