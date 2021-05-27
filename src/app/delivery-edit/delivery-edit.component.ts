import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/entities/Client';
import { Delivery } from '../model/entities/Delivery';
import { ClientService } from '../service/client.service';
import { DeliveryService } from '../service/delivery.service';

@Component({
  selector: 'app-delivery-edit',
  templateUrl: './delivery-edit.component.html',
  styleUrls: ['./delivery-edit.component.css']
})
export class DeliveryEditComponent implements OnInit {
  delivery: Delivery = new Delivery()

  client: Client = new Client()
  listClients: Client[]
  idClient: number

  constructor(
    private clientService: ClientService,
    private deliveryService: DeliveryService,
    private router: Router,
    private route: ActivatedRoute,
    //private alerts: AlertsService
  ) { }

  ngOnInit() {
  }

  findByIdDelivery(id: number) {
    this.deliveryService.getByIdDelivery(id).subscribe((resp: Delivery) => {
      this.delivery = resp
    })
  }

  findByIdClient() {
    this.clientService.getByIdClient(this.idClient).subscribe((resp: Client) => {
      this.client = resp
    })
  }

  findAllClients() {
    this.clientService.getAllClient().subscribe((resp: Client[]) => {
      this.listClients = resp
    })
  }

  update() {
    this.client.id = this.idClient
    this.delivery.client = this.client

    this.deliveryService.putDelivery(this.delivery).subscribe((resp: Delivery) => {
      this.delivery = resp
      //this.alerts.showAlertSuccess('Entrega atualizada com sucesso!')
      this.router.navigate(['/delivery'])

    })
  }

}
