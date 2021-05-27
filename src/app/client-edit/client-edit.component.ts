import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/entities/Client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  client: Client = new Client()

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    //private alerts: AlertsService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.findByIdClient(id)
  }

  findByIdClient(id: number) {
    this.clientService.getByIdClient(id).subscribe((resp: Client) => {
      this.client = resp
    })
  }

  update() {
    this.clientService.putClient(this.client).subscribe((resp: Client) => {
      this.client = resp
      //this.alerts.showAlertSuccess("Cliente atualizado com sucesso!")
      this.router.navigate(["/client"])
    })
  }

}
