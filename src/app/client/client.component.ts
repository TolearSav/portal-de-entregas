import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/entities/Client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client: Client = new Client()
  listClients: Client[]

  constructor(
    private clientService: ClientService,
    private router: Router,
    //private alerts: AlertsService
  ) { }

  ngOnInit() {
    this.findAllClient()
  }

  findAllClient() {
    this.clientService.getAllClient().subscribe((resp: Client[])=>{
      this.listClients = resp
    })
  }

  register() {
    this.clientService.postClient(this.client).subscribe((resp: Client) => {
      this.client = resp
      //this.alerts.showAlertSuccess('Cliente cadastrado com sucesso!')
      this.findAllClient()
      this.client = new Client
    })
  }

}
