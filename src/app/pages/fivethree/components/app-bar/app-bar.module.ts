import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppBarPage } from './app-bar.page';
import {
  FivAppBarModule,
  FivCenterModule,
  FivFabModule,
  FivIconModule,
  FivFeatureDiscoveryModule,
  FivIfModule
} from '@fivethree/core';
const routes: Routes = [
  {
    path: '',
    component: AppBarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivAppBarModule,
    FivCenterModule,
    FivIfModule,
    FivFabModule,
    FivIconModule,
    FivFeatureDiscoveryModule
  ],
  declarations: [AppBarPage]
})
export class AppBarPageModule {}
