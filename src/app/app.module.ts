import {HttpClientModule} from '@angular/common/http';
import {APP_ID, Inject, NgModule, PLATFORM_ID} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AdminComponent} from './components/admin/admin.component';
import {CartComponent} from './components/client/cart/cart.component';
import {ClientComponent} from './components/client/client.component';
import {InfoComponent} from './components/client/products/info/info.component';
import {ProductsComponent} from './components/client/products/products.component';
import {FilterComponent} from './components/client/products/filter/filter.component';
import {ModalComponent} from './components/client/products/modal/modal.component';
import {OrdersComponent} from './components/admin/orders/orders.component';
import {OrdersInfoComponent} from './components/admin/orders/orders-info/orders-info.component';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {StatisticsComponent} from './components/admin/statistics/statistics.component';
import {SettingsComponent} from './components/admin/settings/settings.component';
import {DataProductComponent} from './components/admin/data-product/data-product.component';
import { BreadcrumbComponent } from './components/admin/breadcrumb/breadcrumb.component';
import {UserService} from './components/admin/orders/orders-info/orders-info.service';

@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  declarations: [BreadcrumbComponent]
})
export class DemoMaterialModule {
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AdminComponent,
    CartComponent,
    ClientComponent,
    InfoComponent,
    FilterComponent,
    ModalComponent,
    OrdersComponent,
    OrdersInfoComponent,
    DashboardComponent,
    StatisticsComponent,
    SettingsComponent,
    DataProductComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ng-universal-demystified'
    }),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule
  ],
  entryComponents: [ModalComponent],
  providers: [UserService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
