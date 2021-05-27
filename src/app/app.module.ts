import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { OccurrencesComponent } from './occurrences/occurrences.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { DeliveryEditComponent } from './delivery-edit/delivery-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    ClientComponent,
    HomeComponent,
    DeliveryComponent,
    OccurrencesComponent,
    ClientEditComponent,
    ClientDeleteComponent,
    DeliveryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
