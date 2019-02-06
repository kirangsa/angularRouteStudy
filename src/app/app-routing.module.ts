import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [{
  path: 'products',
  component: ProductComponent
},
{
  path: 'product/:id',
  component: ProductDetailsComponent
},
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'products'
},
{
  path: '**',
  component: NotFoundPageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
