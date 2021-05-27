import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientComponent } from './client/client.component';
import { DeliveryEditComponent } from './delivery-edit/delivery-edit.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},

  {path: 'client', component: ClientComponent},
  {path: 'client-edit/:id', component: ClientEditComponent},
  {path: 'client-delete/:id', component: ClientDeleteComponent},

  {path: 'delivery', component: DeliveryComponent},
  {path: 'delivery-edit/:id', component: DeliveryEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
