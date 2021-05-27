import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/entities/Client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {
  client: Client = new Client()
  idClient: number

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    //private alerts: AlertsService
    ) { }

  ngOnInit() {
    this.idClient = this.route.snapshot.params["id"]
    this.findByIdClient(this.idClient)
  }

  findByIdClient(id: number) {
    this.clientService.getByIdClient(id).subscribe((resp: Client)=>{
      this.client = resp
    })
  }

  erase() {
    this.clientService.deleteClient(this.idClient).subscribe(()=>{
      //this.alerts.showAlertSuccess("Cliente apagado com sucesso!")
      this.router.navigate(["/client"])
    })
  }
}
