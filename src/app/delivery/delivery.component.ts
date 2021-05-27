import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/entities/Client';
import { Delivery } from '../model/entities/Delivery';
import { Occurrences } from '../model/entities/Occurrences';
import { StatusDelivery } from '../model/enum/StatusDelivery';
import { ClientService } from '../service/client.service';
import { DeliveryService } from '../service/delivery.service';
import { OccurrencesService } from '../service/occurrences.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  public StatusEnum = StatusDelivery;
  public statusPending = StatusDelivery.pending;
  public statusDelivered = StatusDelivery.delivered;
  public statusCanceled = StatusDelivery.canceled;

  delivery: Delivery = new Delivery()
  listDeliveries: Delivery[]

  client: Client = new Client()
  listClients: Client[]
  idClient: number

  occurrences: Occurrences = new Occurrences()
  listOccurrences: Occurrences[]
  idOccurrences: number

  constructor(
    private router: Router,
    private deliveryService: DeliveryService,
    private clientService: ClientService,
    private occurrencesService: OccurrencesService
    //private alerts: AlertsService

  ) { }

  ngOnInit() {
    this.getAllClients()
    this.getAllDeliveries()
  }

  getAllClients() {
    this.clientService.getAllClient().subscribe((resp: Client[]) => {
      this.listClients = resp
    })
  }

  findByIdClient() {
    this.clientService.getByIdClient(this.idClient).subscribe((resp: Client) => {
      this.client = resp
    })
  }

  getAllOccurrences() {
    this.occurrencesService.getAllOccurrences().subscribe((resp: Occurrences[]) => {
      this.listOccurrences = resp
    })
  }


  getAllDeliveries() {
    this.deliveryService.getAllDelivery().subscribe((resp: Delivery[]) => {
      this.listDeliveries = resp
    })
  }

  registerDelivery() {
    this.client.id = this.idClient
    this.delivery.client = this.client

    this.deliveryService.postDelivery(this.delivery).subscribe((resp: Delivery) => {
      this.delivery = resp
      //this.alerts.showAlertSuccess('Entrega feita com sucesso!')
      this.delivery = new Delivery()
      this.getAllDeliveries()
    })

  }

  registerOccurrence() {
    this.occurrencesService.postOccurrences(this.occurrences).subscribe((resp: Occurrences) => {
      this.occurrences = resp
       //this.alerts.showAlertSuccess('Entrega feita com sucesso!')
      
      this.occurrences = new Occurrences
      this.getAllOccurrences()
    })

  }

}


