import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InfoComponent} from './client/products/info/info.component';
import {AdminComponent} from './admin/views/admin.component';
import {StatisticsComponent} from './admin/components/statistics/statistics.component';
import {CartComponent} from './client/cart/cart.component';
import {DataProductComponent} from './admin/components/data-product/data-product.component';
import {SettingsComponent} from './admin/components/settings/settings.component';
import {ProductsComponent} from './client/products/products.component';
import {OrdersComponent} from './admin/components/orders/orders.component';
import {ClientComponent} from './client/client.component';
import {DashboardComponent} from './admin/components/dashboard/dashboard.component';


const productsRoutes: Routes = [
  {path: 'details', component: InfoComponent}
];

const itemRoutes: Routes = [
  {path: '',  pathMatch: 'full', redirectTo: '/products'},
  {path: 'products', component: ProductsComponent, children: productsRoutes},
  {path: 'cart', component: CartComponent}
];

const adminRoutes: Routes = [
  {path: '',  pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'dashboard', component: DashboardComponent, data: { bc: 'dashboard' }},
  {path: 'orders', component: OrdersComponent , data: { bc: 'orders' }},
  {path: 'products', component: DataProductComponent , data: { bc: 'products' }},
  {path: 'statistics', component: StatisticsComponent , data: { bc: 'statistics' }},
  {path: 'settings', component: SettingsComponent , data: { bc: 'settings' }}
];

const routes: Routes = [

  {path: 'admin', component: AdminComponent, children:adminRoutes},
  {path: '', component: ClientComponent, children: itemRoutes}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
