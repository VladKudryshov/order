import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebMenuComponent } from './web-menu/web-menu.component';
import { AdminComponent } from './views/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataProductComponent } from './components/data-product/data-product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersInfoComponent } from './components/orders/orders-info/orders-info.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { UserService } from './components/orders/orders-info/orders-info.service';
import { RouterModule } from '@angular/router';
import {
  MatCheckboxModule,
  MatDialogModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTreeModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTreeModule,
    RouterModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [
    UserService
  ],
  exports: [
    WebMenuComponent,
    AdminComponent
  ],
  declarations: [
    AdminComponent,
    WebMenuComponent,
    DashboardComponent,
    StatisticsComponent,
    SettingsComponent,
    OrdersInfoComponent,
    OrdersComponent,
    DataProductComponent
  ]
})
export class AdminModule { }
