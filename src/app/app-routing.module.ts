import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InfoComponent} from './components/client/products/info/info.component';
import {AppComponent} from './app.component';
import {CartComponent} from './components/client/cart/cart.component';
import {ClientComponent} from './components/client/client.component';
import {AdminComponent} from './components/admin/admin.component';
import {ProductsComponent} from './components/client/products/products.component';
import {OrdersComponent} from './components/admin/orders/orders.component';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {DataProductComponent} from './components/admin/data-product/data-product.component';
import {StatisticsComponent} from './components/admin/statistics/statistics.component';
import {SettingsComponent} from './components/admin/settings/settings.component';



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
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
