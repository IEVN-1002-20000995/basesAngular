import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importamos ReactiveFormsModule
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { CinepolisAngularComponent } from './formularios/cinepolis-angular/cinepolis-angular.component';
import { ResistenciasComponent } from './formularios/resistencias/resistencias.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFilterPipe,
    Ejemplo1Component,
    CinepolisAngularComponent,
    ResistenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,          
    ReactiveFormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
