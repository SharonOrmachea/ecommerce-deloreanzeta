import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ToastrModule } from 'ngx-toastr';

import { BannerUpComponent } from './components/banner-up/banner-up.component';
import { CategoriesUpComponent } from './components/categories-up/categories-up.component';
import { ProductUpComponent } from './components/product-up/product-up.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { AdminStoreComponent } from './page/admin-store.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';





@NgModule({
  declarations: [
    BannerUpComponent,
    CategoriesUpComponent,
    ProductUpComponent,
    ListProductComponent,
    AdminStoreComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatButtonToggleModule,
    ToastrModule.forRoot()

  ],
  exports: [
    BannerUpComponent,
    CategoriesUpComponent,
    ProductUpComponent,
    ListProductComponent,
    AdminStoreComponent
  ]
})
export class AdminStoreModule { }