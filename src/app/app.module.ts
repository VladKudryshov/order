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
import {StatisticsComponent} from './admin/statistics/statistics.component';
import {InfoComponent} from './client/products/info/info.component';
import {UserService} from './admin/orders/orders-info/orders-info.service';
import {CartComponent} from './client/cart/cart.component';
import {FilterComponent} from './client/products/filter/filter.component';
import {DataProductComponent} from './admin/data-product/data-product.component';
import {ClientComponent} from './client/client.component';
import {OrdersComponent} from './admin/orders/orders.component';
import {AdminComponent} from './admin/admin.component';
import {OrdersInfoComponent} from './admin/orders/orders-info/orders-info.component';
import {SettingsComponent} from './admin/settings/settings.component';
import {ProductsComponent} from './client/products/products.component';
import {ModalComponent} from './client/products/modal/modal.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';


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
  ]
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
    AppRoutingModule
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
