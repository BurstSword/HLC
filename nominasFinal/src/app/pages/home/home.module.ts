import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    ComponentsModule
  ]
})
export class HomeModule { }